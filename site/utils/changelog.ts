import changelogCN from 'arco-next/CHANGELOG.zh-CN.md';
import changelogEN from 'arco-next/CHANGELOG.md';

const changelogCache = {
  'zh-CN': null as typeof changelogCN | null,
  'en-US': null as typeof changelogEN | null,
};

/**
 * 惰性加载日志数据
 */
function loadChangelog(lang: 'zh-CN' | 'en-US') {
  if (changelogCache[lang]) {
    return changelogCache[lang];
  }

  // 根据语言选择加载对应的日志
  const changelog = lang === 'zh-CN' ? changelogCN : changelogEN;
  // 缓存结果避免重复计算
  changelogCache[lang] = changelog;
  return changelog;
}

/**
 * 获取指定语言的更新日志
 */
export function getChangelog(lang: 'zh-CN' | 'en-US') {
  return loadChangelog(lang);
}

/**
 * 获取中文更新日志
 */
export function getChangelogCN() {
  return loadChangelog('zh-CN');
}

/**
 * 获取英文更新日志
 */
export function getChangelogEN() {
  return loadChangelog('en-US');
}
