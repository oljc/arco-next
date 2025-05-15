import { DocProp, DocInfo } from './parser';
import { sanitize } from '../utils';

const getHeaders = (type: 'api' | 'interface', hasVersion: boolean): { zh: string; en: string } => {
  const base = {
    zh: ['参数名', '描述', '类型', '默认值'],
    en: [type === 'api' ? 'Attribute' : 'Parameter', 'Description', 'Type', 'Default'],
  };

  if (hasVersion) {
    base.zh.push('版本');
    base.en.push('Version');
  }

  const row = (cols: string[]) => `|${cols.join('|')}|\n|${cols.map(() => '---').join('|')}|`;

  return {
    zh: row(base.zh),
    en: row(base.en),
  };
};

const renderRow = (p: DocProp, lang: 'zh' | 'en', hasVersion: boolean) => {
  const required = p.required ? (lang === 'zh' ? ' **(必填)**' : ' **(required)**') : '';
  const cells = [
    sanitize(`${p.name}${required}`),
    sanitize(p[lang]),
    `\`${sanitize(p.type)}\``,
    `\`${sanitize(p.defaultValue)}\``,
  ];
  if (hasVersion) cells.push(sanitize(p.version ?? ''));
  return `|${cells.join('|')}|`;
};

export const renderTables = (
  info: DocInfo,
  type: 'api' | 'interface',
): { zhTable: string; enTable: string } => {
  const hasVersion = info.props.some((p) => p.version);
  const headers = getHeaders(type, hasVersion);
  const suffix = type === 'api' ? `### \`<${info.name}>\` Props` : `### ${info.name}`;

  const buildTable = (lang: 'zh' | 'en') =>
    `${suffix}\n\n${headers[lang]}\n${info.props.map((p) => renderRow(p, lang, hasVersion)).join('\n')}`;

  return {
    zhTable: buildTable('zh'),
    enTable: buildTable('en'),
  };
};
