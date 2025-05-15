import { App } from 'vue';
import Article from './article/index.vue';
import AnchorHead from './anchor-head/index.vue';
import CodeBlock from './code-block/index.vue';
import CellDemo from './cell-demo/index.vue';
import CellCode from './cell-code/index.vue';
import ArticleHead from './article-head/index.vue';
import InstallTabs from './install-tabs/index.vue';

export const installComponents = (app: App) => {
  app.component('CodeBlock', CodeBlock);
  app.component('CellDemo', CellDemo);
  app.component('CellCode', CellCode);
  app.component('AnchorHead', AnchorHead);
  app.component('Article', Article);
  app.component('ArticleHead', ArticleHead);
  app.component('InstallTabs', InstallTabs);
};
