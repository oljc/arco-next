import { marked } from './marked';
import { Token } from 'marked';
import { basename } from 'path';
import { createCache } from './cache';

const toPascalCase = (string: string): string => {
  string = string.trim();

  return string
    .replace(/^[a-z]/, (match: string) => match.toLocaleUpperCase())
    .replace(/-(\w)/g, (match: string, p1: string) => {
      return p1.toLocaleUpperCase();
    });
};

export const transformMain = (tokens: Token[]) => {
  const imports: string[] = [];
  const components: string[] = [];

  for (const token of tokens) {
    if (token.type === 'fileImport') {
      const componentName = toPascalCase(`Demo-${token.basename}`);
      imports.push(`import ${componentName} from './__demo__/${token.basename}.md';`);
      components.push(componentName);
    }
  }

  const html = marked.parser(tokens);

  const template = `<template>
  <Article>
    ${html}
  </Article>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
${imports.join('\n')}

defineOptions({
  name: 'ArcoMain',
});
</script>
`;
  return template;
};

export const transformDemo = (tokens: any[], filename: string) => {
  const id = basename(filename, '.md');
  const virtualId = `/@virtual${filename}`;

  let code = '';
  let meta = {} as any;
  const description = {} as any;
  for (const token of tokens) {
    if (token.type === 'metaData') {
      meta = token.data;
      for (const key in meta.description) {
        description[key] = marked.parseInline(meta.description[key]);
      }
      continue;
    }
    if (token.type === 'description') {
      description[token.locale] = token.content;
      continue;
    }
    if (token.type === 'code' && token.lang === 'vue') {
      createCache(virtualId, token.text);
      code = marked.parser([token]);
    }
  }

  const template = `<template>
  <code-block id="${id}" :data="data">
     <template #zh>
      ${description['zh-CN'] ?? ''}
    </template>
    <template #en>
      ${description['en-US'] ?? ''}
    </template>
    <cell-demo>
      <VirtualDemo />
    </cell-demo>
    <cell-code>
      ${code}
    </cell-code>
  </code-block>
</template>
<script setup lang="ts">
import VirtualDemo from '${virtualId}';

defineOptions({ name: 'DemoSection' });

const data = ${JSON.stringify(meta)};
</script>
`;

  return template;
};
