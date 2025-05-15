import { marked, parseInline } from 'marked';
import yaml from 'js-yaml';
import Prism from 'prismjs';
import loadLanguages from 'prismjs/components/index';
import { basename } from 'path';
import { parse } from '@vue/compiler-sfc';

loadLanguages(['css', 'html', 'shell', 'js', 'ts', 'jsx', 'tsx', 'less', 'diff']);

function escapeHtml(text: string) {
  if (!text) return '';
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

const handleCell = (cell: any) => ({
  ...cell,
  text: parseInline(cell.text),
});

const metaData = {
  name: 'metaData',
  level: 'block' as const,
  tokenizer(src: string) {
    const match = /^```yaml\n+(.+?)\n+```(?:\n|$)/s.exec(src);
    if (!match) return undefined;

    const text = match[1].trim();
    return {
      type: 'metaData',
      raw: match[0],
      text,
      data: yaml.load(text),
    };
  },
  renderer({ data = {} }) {
    return `<ArticleHead v-bind="${escapeHtml(JSON.stringify(data))}" />`;
  },
};

const description = {
  name: 'description',
  level: 'block' as const,
  tokenizer(src: string) {
    const match = /^##\s+(zh-CN|en-US)\n+(.+?)\n+---(?:\n|$)/s.exec(src);
    if (!match) return undefined;

    if (match) {
      const text = match[2].trim();
      const content = marked(text);
      return {
        type: 'description',
        raw: match[0],
        text,
        locale: match[1],
        content,
      };
    }
  },
  renderer({ content = '' }) {
    return content;
  },
};

const fileImport = {
  name: 'fileImport',
  level: 'block' as const,
  tokenizer(src: string) {
    const match = /^@import\s+(.+)(?:\n|$)/.exec(src);
    if (!match) return undefined;
    const filename = match[1].trim();
    return {
      type: 'fileImport',
      raw: match[0],
      filename,
      basename: basename(filename, '.md'),
    };
  },
  renderer({ basename }: { basename: string }) {
    return `<demo-${basename} />\n`;
  },
};

marked.use({
  gfm: true,
  breaks: true,
  renderer: {
    heading({ text, depth }) {
      const anchor = text.replace(/\s+/g, '-');
      const mdText = parseInline(text);
      if (depth === 2) {
        return `<anchor-head level="${depth}" href="#${anchor}" id="${anchor}" title="${mdText}" />`;
      }
      return `<h${depth} id="${anchor}">${mdText}</h${depth}>`;
    },
    code({ text, lang }) {
      if (!lang) return `<pre class="code-content"><code>${text}</code></pre>\n`;

      if (lang === 'vue') {
        const { descriptor } = parse(text);
        const { script, styles } = descriptor;

        const segmentsMap = new Map();
        let content = text;

        if (script?.content) {
          const key = `_LJC_script`;
          segmentsMap.set(key, {
            content: script.content,
            lang: 'ts',
          });
          content = content.replace(script.content, key);
        }

        styles.forEach((style, i) => {
          const key = `_LJC_style${i}`;
          segmentsMap.set(key, {
            content: style.content,
            lang: 'less',
          });
          content = content.replace(style.content, key);
        });

        let highlighted = Prism.highlight(content, Prism.languages.html, 'html');

        segmentsMap.forEach(({ content, lang }, key) => {
          const highlightedSegment = Prism.highlight(content, Prism.languages[lang], lang);
          highlighted = highlighted.replace(key, highlightedSegment);
        });

        return `<pre class="code-content"><code class="lang-vue">${highlighted}</code></pre>\n`;
      }

      if (lang === 'shell install') {
        const cmd = ['npm', 'pnpm', 'yarn', 'bun'];
        const panes = cmd
          .map((item) => {
            const code = Prism.highlight(`${item} ${text}`, Prism.languages['sh'], 'sh');
            return `<template #${item}>${code}</template>`;
          })
          .join('');
        return `<InstallTabs>${panes}</InstallTabs>`;
      }

      const code = Prism.languages[lang]
        ? Prism.highlight(text, Prism.languages[lang], lang)
        : text;
      return `<pre class="code-content"><code class="lang-${lang}">${code}</code></pre>\n`;
    },
    link({ href, title, text }) {
      const attrs = [`class="link"`, `href="${href}"`];

      if (title) {
        const isBlank = /_blank/.test(title);
        const cleanTitle = title.replace('_blank', '').trim();

        if (isBlank) attrs.push('target="_blank"');
        if (cleanTitle) attrs.push(`title="${cleanTitle}"`);
      }

      return `<a ${attrs.join(' ')}>${text}</a>`;
    },
    table({ header, rows }) {
      const hCells = header.map(handleCell);
      const rCells = rows.map((row) => row.map(handleCell));

      const hHtml = hCells
        .map((cell) => `<a-th align="${cell.align}">${cell.text}</a-th>`)
        .join('');

      const rHtml = rCells
        .map(
          (row) =>
            `<a-tr>${row.map((cell) => `<a-td align="${cell.align}">${cell.text}</a-td>`).join('')}</a-tr>`,
        )
        .join('');

      return `<a-table class="component-api-table">
  <colgroup><col style="min-width: 120px"/></colgroup>
  <a-thead><a-tr>${hHtml}</a-tr></a-thead>
  <a-tbody>${rHtml}</a-tbody>
</a-table>`;
    },
  },
  extensions: [metaData, fileImport, description],
});

export { marked };
