/* eslint-disable no-console */
import fs from 'fs-extra';
import { resolve } from 'path';
import { sync } from 'glob';
import { resolvePath, camelToKebab } from '../utils';
import { parseProps, parseInterface } from './parser';
import { renderTables } from './render';
import { getComponentMeta } from './test';

const COMPONENTS_DIR = resolvePath('ui/components');

const getComponents = () => {
  const name = process.argv[2] || 'link';
  if (name) {
    const component = camelToKebab(name);
    return [component];
  }

  const components = sync('*/TEMPLATE.md', { cwd: COMPONENTS_DIR }).map(
    (path) => path.split('/')[0],
  );
  return components;
};

const getYamlBlock = (content: string, lang: string) => {
  const regex = new RegExp('```yaml\\s+' + lang + '\\n([\\s\\S]*?)\\n```', 'i');
  const match = content.match(regex);
  return match?.[1] ? `\`\`\`yaml\n${match[1]}\n\`\`\`` : '';
};

const getNonYamlContent = (content: string) => {
  return content.replace(/```yaml\s+[a-z-]+\n[\s\S]*?\n```/gi, '').trim();
};

const main = async () => {
  try {
    const components = getComponents();

    for (const componentName of components) {
      const TEMPLATE_PATH = resolve(COMPONENTS_DIR, `${componentName}/TEMPLATE.md`);

      if (!fs.existsSync(TEMPLATE_PATH)) {
        console.log(`Component or template does not exist: ${componentName}`);
        continue;
      }

      const content = await fs.readFile(TEMPLATE_PATH, 'utf-8');

      const zhYaml = getYamlBlock(content, 'zh-CN');
      const enYaml = getYamlBlock(content, 'en-US');
      const nonYamlContent = getNonYamlContent(content);

      let zhContent = nonYamlContent;
      let enContent = nonYamlContent;

      const apiMatches = Array.from(content.matchAll(/%%API\((.+?)\)%%/g));
      for (const item of apiMatches) {
        const filePath = resolve(COMPONENTS_DIR, `${componentName}/${item[1]}`);
        const desc = await parseProps(filePath);

        const meta = getComponentMeta(filePath);
        const { zhTable, enTable } = renderTables(desc, 'api');

        const placeholder = item[0]; // e.g., %%API(filename.ts)%%
        zhContent = zhContent.replace(placeholder, zhTable);
        enContent = enContent.replace(placeholder, enTable);
      }

      const interfaceMatches = Array.from(content.matchAll(/%%INTERFACE\((.+?)\)%%/g));
      for (const item of interfaceMatches) {
        const filePath = resolve(COMPONENTS_DIR, `${componentName}/${item[1]}`);
        const desc = await parseInterface(filePath);
        const { zhTable, enTable } = renderTables(desc[0], 'interface');
        // 替换占位符
        const placeholder = item[0]; // e.g., %%INTERFACE(filename.ts)%%
        zhContent = zhContent.replace(placeholder, zhTable);
        enContent = enContent.replace(placeholder, enTable);
      }

      const finalZhContent = zhYaml ? `${zhYaml}\n\n${zhContent}` : zhContent;
      const finalEnContent = enYaml ? `${enYaml}\n\n${enContent}` : enContent;

      const zhPath = resolve(COMPONENTS_DIR, `${componentName}/README.zh-CN.md`);
      const enPath = resolve(COMPONENTS_DIR, `${componentName}/README.en-US.md`);

      await Promise.all([
        fs.writeFile(zhPath, finalZhContent),
        fs.writeFile(enPath, finalEnContent),
      ]);

      console.log(`Successfully generated docs: ${componentName}`);
    }
  } catch (err) {
    console.error(`Docs generation: ${err}`);
  }
};

main();
