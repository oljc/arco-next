/* eslint-disable no-console */
import fs from 'fs-extra';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import terser from '@rollup/plugin-terser';
import dts from 'vite-plugin-dts';
import less from 'less';
import cleanCSS from 'clean-css';
import { build, InlineConfig, Plugin } from 'vite';
import { dirname } from 'path';
import { sync } from 'glob';
import { resolvePath, ensureEmptyDir } from './utils';

const COMPONENTS_DIR = resolvePath('ui/components');
const COMPONENTS_INDEX = resolvePath('ui/components/index.ts');
const COMPONENTS_ICON = resolvePath('ui/components/icon/index.ts');
const COMPONENTS_ARCO_VUE = resolvePath('ui/components/arco-vue.ts');

const ES_DIR = resolvePath('ui/es');
const LIB_DIR = resolvePath('ui/lib');
const DIST_DIR = resolvePath('ui/dist');

async function buildEs() {
  const langFiles = sync('ui/components/locale/lang/*.ts');
  await build({
    mode: 'production',
    build: {
      minify: false,
      emptyOutDir: true,
      reportCompressedSize: false,
      rollupOptions: {
        external: ['vue'],
        input: [COMPONENTS_INDEX, COMPONENTS_ICON, ...langFiles],
        output: [
          {
            format: 'es',
            entryFileNames: '[name].mjs',
            preserveModules: true,
            preserveModulesRoot: 'ui/components',
            exports: 'named',
            dir: ES_DIR,
          },
          {
            format: 'cjs',
            entryFileNames: '[name].js',
            preserveModules: true,
            preserveModulesRoot: 'ui/components',
            exports: 'named',
            dir: LIB_DIR,
          },
        ],
      },
      lib: {
        entry: COMPONENTS_INDEX,
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      dts({
        root: resolvePath('ui'),
        tsconfigPath: resolvePath('ui/tsconfig.json'),
        outDir: ES_DIR,
      }),
    ],
  });
}

async function buildDist(type: 'normal' | 'icon' = 'normal') {
  const isIcon = type === 'icon';
  const name = isIcon ? 'ArcoIcon' : 'Arco';
  const fileName = isIcon ? 'icon' : 'index';
  const entry = isIcon ? COMPONENTS_ICON : COMPONENTS_ARCO_VUE;
  const config: InlineConfig = {
    mode: 'production',
    build: {
      target: 'es2020',
      emptyOutDir: false,
      sourcemap: true,
      minify: false,
      reportCompressedSize: false,
      rollupOptions: {
        external: ['vue'],
        output: [
          {
            name,
            format: 'umd',
            entryFileNames: `${fileName}.js`,
            dir: DIST_DIR,
            exports: 'named',
            globals: {
              vue: 'Vue',
            },
          },
          {
            name,
            format: 'umd',
            compact: true,
            minifyInternalExports: true,
            entryFileNames: `${fileName}.min.js`,
            dir: DIST_DIR,
            exports: 'named',
            globals: {
              vue: 'Vue',
            },
            plugins: [terser() as any],
          },
          {
            format: 'es',
            entryFileNames: `${fileName}.min.mjs`,
            dir: DIST_DIR,
            exports: 'named',
            plugins: [terser() as any],
          },
        ],
      },
      lib: {
        entry,
      },
    },
    plugins: [vue(), vueJsx()],
  };
  await build(config);
}

const lessToCss: Plugin = {
  name: 'lessToCss',
  renderChunk(code, chunk) {
    this.emitFile({
      type: 'asset',
      fileName: chunk.fileName.replace('index.js', 'css.js'),
      source: code.replace(/\.less/g, '.css').replace(/\n+$/g, '\n'),
    });
    return null;
  },
};
async function buildStyle() {
  const lessFiles = sync('**/*.less', { cwd: COMPONENTS_DIR });
  const indexLessFiles = lessFiles.filter((file) => file.endsWith('index.less'));

  const copyTasks = lessFiles.map((file) => {
    const sourcePath = resolvePath(`ui/components/${file}`);
    return Promise.all([
      fs.copy(sourcePath, resolvePath(`ui/es/${file}`)),
      fs.copy(sourcePath, resolvePath(`ui/lib/${file}`)),
    ]);
  });

  const compileTasks = indexLessFiles.map(async (file) => {
    const sourcePath = resolvePath(`ui/components/${file}`);
    const cssFile = file.replace('.less', '.css');
    const lessContent = await fs.readFile(sourcePath, 'utf8');
    const result = await new Promise<Less.RenderOutput>((resolve, reject) => {
      less.render(
        lessContent,
        {
          compress: true,
          filename: file,
          paths: [resolvePath(`ui/components/${dirname(file)}`), COMPONENTS_DIR],
        },
        (err, output) => (err ? reject(err) : resolve(output as Less.RenderOutput)),
      );
    });

    if (result && result.css) {
      await Promise.all([
        fs.writeFile(resolvePath(`ui/es/${cssFile}`), result.css),
        fs.writeFile(resolvePath(`ui/lib/${cssFile}`), result.css),
      ]);
    }
  });

  const mainIndexLessPath = resolvePath('ui/components/index.less');
  const mainLessContent = await fs.readFile(mainIndexLessPath, 'utf8');
  const mainResult = await less.render(mainLessContent, { paths: [COMPONENTS_DIR] });

  await Promise.all([
    fs.writeFile(resolvePath('ui/dist/arco.less'), "@import '../es/index.less';\n\n"),
    fs.writeFile(resolvePath('ui/dist/arco.css'), mainResult.css),
    fs.writeFile(resolvePath('ui/dist/arco.min.css'), new cleanCSS().minify(mainResult.css).styles),
    fs.copy(mainIndexLessPath, resolvePath('ui/es/index.less')),
    fs.copy(mainIndexLessPath, resolvePath('ui/lib/index.less')),
  ]);

  await Promise.all([...copyTasks, ...compileTasks]);

  const indexFiles = sync('**/style/index.ts', { cwd: COMPONENTS_DIR });
  const rollupInput = Object.fromEntries(
    indexFiles.map((file) => {
      const key = file.replace(/style\/index\.ts$|\/$/g, '');
      return [key ? `${key}style/index` : 'style/index', resolvePath(`ui/components/${file}`)];
    }),
  );

  await build({
    mode: 'production',
    build: {
      target: 'es2020',
      emptyOutDir: false,
      minify: false,
      reportCompressedSize: false,
      rollupOptions: {
        external: /less$/,
        input: rollupInput,
        output: [
          { format: 'es', dir: ES_DIR, entryFileNames: '[name].js' },
          { format: 'commonjs', dir: LIB_DIR, entryFileNames: '[name].js' },
        ],
      },
      lib: { entry: '' },
    },
    plugins: [lessToCss],
  });
}

async function main() {
  try {
    console.log('ArcoNext Building...');

    await Promise.all([ensureEmptyDir(ES_DIR), ensureEmptyDir(LIB_DIR), ensureEmptyDir(DIST_DIR)]);
    await buildEs();
    await buildDist();
    await buildDist('icon');
    await buildStyle();

    console.log('All builds completed successfully');
  } catch (error) {
    console.error('Build error:', error);
    process.exit(1);
  }
}

main();
