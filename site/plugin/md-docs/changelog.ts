import { Token } from 'marked';
import { marked } from './marked';

interface Log {
  component: string;
  log: string;
}

interface Release {
  version: string;
  date: string;
  data: Record<string, Array<Log>>;
}

const getType = (text: string) => {
  if (/attention|重点注意/i.test(text)) {
    return 'attention';
  }
  if (/feature|新增功能/i.test(text)) {
    return 'feature';
  }
  if (/bugfix|问题修复/i.test(text)) {
    return 'bugfix';
  }
  if (/enhancement|功能优化/i.test(text)) {
    return 'enhancement';
  }
  if (/style|样式更新/i.test(text)) {
    return 'style';
  }
  if (/typescript|类型修正/i.test(text)) {
    return 'typescript';
  }
  if (/common|通用/i.test(text)) {
    return 'common';
  }
  return 'other';
};

export const parseChangelog = (tokens: Token[]): Release[] => {
  const changelog = [];
  let temp: Release = { version: '', date: '', data: {} };
  let type = 'other';

  for (const token of tokens) {
    if (token.type === 'heading' && token.depth === 2) {
      if (temp.version) {
        changelog.push(temp);
        temp = { version: '', date: '', data: {} };
      }
      temp.version = token.text;
      continue;
    }
    if (token.type === 'paragraph') {
      temp.date = token.text.slice(1, -1);
      continue;
    }
    if (token.type === 'heading' && token.depth === 3) {
      type = getType(token.text);
    }
    if (token.type === 'list') {
      if (!temp.data[type]) {
        temp.data[type] = [];
      }

      for (const item of token.items) {
        const log = marked.parse(item.text) as string;
        const match = item.text.match(/\*\*([^*:]+)\*\*:/);
        const component = match?.[1]?.trim() || 'common';
        temp.data[type].push({ component, log });
      }
    }
  }

  changelog.push(temp);

  return changelog;
};

export const transChangelog = (tokens: Token[]): string => {
  const changelog = parseChangelog(tokens);
  return `export default ${JSON.stringify(changelog, null, 2)};`;
};
