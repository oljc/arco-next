/* eslint-disable no-console */
import fs from 'fs-extra';
import { resolve, basename } from 'path';
import { glob } from 'glob';
import { optimize, PluginConfig } from 'svgo';
import { JSDOM } from 'jsdom';
import {
  ROOT,
  toKebabCase,
  toPascalCase,
  ensureEmptyDir,
  writeFile,
  writeJsonFile,
  resolvePath,
} from './utils';

const OUTPUT_DIR = resolve(ROOT, 'ui/components/icon');

interface IconData {
  title: string;
  type: string;
  list: Array<{
    name: string;
    componentName: string;
    path: string;
  }>;
}

const maps: Record<string, string> = {
  direction: '方向指示类图标',
  tips: '提示建议类图标',
  interactiveButton: '交互按钮类图标',
  edit: '编辑类图标',
  media: '影音类图标',
  logo: '商标类图标',
  general: '通用类图标',
};

const renderIcon = (svg: string, name: string, iconName: string) => `<template>
  ${svg}
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { CSSProperties, PropType, SVGAttributes } from 'vue';
import { getPrefixCls } from '../../_utils/global-config';
import { isNumber } from '../../_utils/is';

defineOptions({
  name: '${iconName}',
});

const props = defineProps({
  size: [Number, String],
  strokeWidth: {
    type: Number,
    default: 4,
  },
  strokeLinecap: {
    type: String as PropType<SVGAttributes['stroke-linecap']>,
    default: 'butt',
  },
  strokeLinejoin: {
    type: String as PropType<SVGAttributes['stroke-linejoin']>,
    default: 'miter',
  },
  rotate: Number,
  spin: Boolean,
});

const emit = defineEmits(['click']);

const prefixCls = getPrefixCls('icon');
const cls = computed(() => [prefixCls, \`\${prefixCls}-${name.replace('icon-', '')}\`, { [\`\${prefixCls}-spin\`]: props.spin }]);
const innerStyle = computed(() => {
  const styles: CSSProperties = {};
  if (props.size) {
    styles.fontSize = isNumber(props.size) ? \`\${props.size}px\` : props.size;
  }
  if (props.rotate) {
    styles.transform = \`rotate(\${props.rotate}deg)\`;
  }
  return styles;
});

const onClick = (ev: MouseEvent) => emit('click', ev);
</script>
`;

const svgoPlugins: PluginConfig[] = [
  'removeStyleElement',
  'removeScripts',
  'removeDimensions',
  {
    name: 'removeAttrs',
    params: {
      attrs: ['class', 'style', 'stroke-width', 'stroke-linecap', 'stroke-linejoin'],
    },
  },
  {
    name: 'addAttributesToSVGElement',
    params: {
      attributes: [
        { ':class': 'cls' },
        { ':style': 'innerStyle' },
        { ':stroke-width': 'strokeWidth' },
        { ':stroke-linecap': 'strokeLinecap' },
        { ':stroke-linejoin': 'strokeLinejoin' },
        { '@click': 'onClick' },
      ],
    },
  },
];

function getSVGData(): IconData[] {
  return Object.entries(maps).map(([key, title]) => {
    const files = glob.sync(`${toKebabCase(key)}/**/*.svg`, {
      cwd: resolve(ROOT, 'icon'),
      absolute: true,
    });

    return {
      title,
      type: key,
      list: files.map((filePath) => {
        const name = `icon-${basename(filePath, '.svg')}`;
        return {
          name,
          componentName: `${toPascalCase(name)}`,
          path: filePath,
        };
      }),
    };
  });
}

async function createIconComponent(item: {
  name: string;
  componentName: string;
  path: string;
}): Promise<boolean> {
  try {
    const svgFile = await fs.readFile(item.path, 'utf8');
    const { name, componentName } = item;

    const optimizedSvg = optimize(svgFile, {
      path: item.path,
      plugins: svgoPlugins,
    });

    if (!optimizedSvg.data) return false;

    const svgElement = JSDOM.fragment(optimizedSvg.data).firstElementChild;
    if (!svgElement) return false;

    const componentDir = resolve(OUTPUT_DIR, name);
    await fs.ensureDir(componentDir);

    await fs.writeFile(
      resolve(componentDir, `${name}.vue`),
      renderIcon(svgElement.outerHTML, name, componentName),
    );

    await fs.writeFile(
      resolve(componentDir, 'index.ts'),
      `import type { App } from 'vue';
import type { ArcoIconOptions } from '../../_utils/types';
import _${componentName} from './${name}.vue';

const ${componentName} = Object.assign(_${componentName}, {
  install: (app: App, options?: ArcoIconOptions) => {
    const iconPrefix = options?.iconPrefix ?? '';
    app.component(iconPrefix + _${componentName}.name, _${componentName});
  },
});

export default ${componentName};
`,
    );

    return true;
  } catch (error) {
    console.error(`Error creating component ${item.name}: ${error}`);
    return false;
  }
}

async function main(): Promise<void> {
  try {
    console.log('Building icon components...');

    const data = getSVGData();

    await ensureEmptyDir(OUTPUT_DIR);

    const allItems = data.flatMap((iconData) => iconData.list);
    await Promise.all(allItems.map((item) => createIconComponent(item)));

    const imports = [];
    const exports = [];
    const components = [];

    for (const item of allItems) {
      components.push(item.componentName);
      imports.push(`import ${item.componentName} from './${item.name}';`);
      exports.push(`export { default as ${item.componentName} } from './${item.name}';`);
    }

    const arcoContent = `import type { App, Plugin } from 'vue';
import type { ArcoIconOptions } from '../_utils/types';
${imports.join('\n')}

const icons: Record<string, Plugin> = {
  ${components.join(',\n  ')}
};

const install = (app: App, options?: ArcoIconOptions) => {
  for (const key of Object.keys(icons)) {
    app.use(icons[key], options);
  }
};

const ArcoVueIcon = { ...icons, install };

export default ArcoVueIcon;\n`;

    const typeContent = `// @ts-nocheck\n/* eslint-disable prettier/prettier */\ndeclare module 'vue' {\nexport interface GlobalComponents {\n${components.map((name) => `    ${name}: typeof import('arco-next/es/icon')['${name}'];`).join('\n')}\n  }\n}\n\nexport {};`;
    const indexContent = `export { default } from './icon';\n${exports.join('\n')}\nexport type {} from './icon-components';\n`;

    await writeFile(resolve(OUTPUT_DIR, 'icon.ts'), arcoContent);
    await writeFile(resolve(OUTPUT_DIR, 'index.ts'), indexContent);
    await writeFile(resolve(OUTPUT_DIR, 'icon-components.ts'), typeContent);
    await writeJsonFile(resolvePath('icon/icons.json'), data);

    console.log('Build Icons Success!');
  } catch (error) {
    console.error(`Error building icons: ${error}`);
    process.exit(1);
  }
}

main();
