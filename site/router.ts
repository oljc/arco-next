import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import nProgress from 'nprogress';
import { clearAnchors } from './utils/anchor';

function toKebabCase(string: any) {
  return string.replace(/[A-Z]+/g, (match: any, offset: any) => {
    return `${offset > 0 ? '-' : ''}${match.toLocaleLowerCase()}`;
  });
}

function getComp(name: any) {
  const kebabName = toKebabCase(name);
  if (name === 'icon') {
    return {
      name,
      kebabName,
      component: () => import('./pages/icon/icon-demo.vue'),
    };
  }

  return {
    name,
    kebabName,
    component: () => import(`../ui/components/${kebabName}/README.zh-CN.md`),
    componentEn: () => import(`../ui/components/${kebabName}/README.en-US.md`),
  };
}

const docs = [
  {
    name: 'start',
    component: () => import('./docs/start.zh-CN.md'),
    componentEn: () => import('./docs/start.en-US.md'),
  },
  {
    name: 'dark',
    component: () => import('./docs/dark.zh-CN.md'),
    componentEn: () => import('./docs/dark.en-US.md'),
  },
  {
    name: 'theme',
    component: () => import('./docs/theme.zh-CN.md'),
    componentEn: () => import('./docs/theme.en-US.md'),
  },
  {
    name: 'token',
    component: () => import('./pages/token/token.vue'),
  },
  {
    name: 'i18n',
    component: () => import('./docs/i18n.zh-CN.md'),
    componentEn: () => import('./docs/i18n.en-US.md'),
  },
  {
    name: 'faq',
    component: () => import('./docs/faq.zh-CN.md'),
    componentEn: () => import('./docs/faq.en-US.md'),
  },
  {
    name: 'changelog',
    component: () => import('./pages/changelog/changelog.vue'),
  },
];

const componentCategories = [
  {
    name: 'common',
    components: ['button', 'icon', 'link', 'typography'],
  },
  {
    name: 'layout',
    components: ['divider', 'grid', 'layout', 'space'],
  },
  {
    name: 'dataDisplay',
    components: [
      'avatar',
      'badge',
      'calendar',
      'card',
      'carousel',
      'collapse',
      'comment',
      'descriptions',
      'empty',
      'image',
      'list',
      'popover',
      'statistic',
      'table',
      'tabs',
      'tag',
      'timeline',
      'tooltip',
      'tree',
    ],
  },
  {
    name: 'dataEntry',
    components: [
      'autoComplete',
      'cascader',
      'checkbox',
      'colorPicker',
      'datePicker',
      'form',
      'input',
      'inputNumber',
      'verificationCode',
      'inputTag',
      'mention',
      'radio',
      'rate',
      'select',
      'slider',
      'switch',
      'textarea',
      'timePicker',
      'transfer',
      'treeSelect',
      'upload',
    ],
  },
  {
    name: 'feedback',
    components: [
      'alert',
      'drawer',
      'message',
      'modal',
      'notification',
      'popconfirm',
      'progress',
      'result',
      'spin',
      'skeleton',
    ],
  },
  {
    name: 'navigation',
    components: ['breadcrumb', 'dropdown', 'menu', 'pageHeader', 'pagination', 'steps'],
  },
  {
    name: 'other',
    components: [
      'affix',
      'anchor',
      'backTop',
      'configProvider',
      'resizeBox',
      'trigger',
      'split',
      'overflowList',
      'scrollbar',
      'watermark',
    ],
  },
];

const routes: RouteRecordRaw[] = [];

const docsMenu = [];
for (const item of docs) {
  const path = `/vue/docs/${toKebabCase(item.name)}`;
  routes.push(
    {
      path,
      component: item.component,
    },
    {
      path: `/vue/en-US/docs/${toKebabCase(item.name)}`,
      component: item.componentEn ?? item.component,
    },
  );
  docsMenu.push({
    name: item.name,
    path,
  });
}

const componentMenu: any[] = [];
componentCategories.forEach((category) => {
  const group: { name: string; menu: { name: string; path: string }[] } = {
    name: category.name,
    menu: [],
  };

  category.components.forEach((name) => {
    const { kebabName, component, componentEn } = getComp(name);
    const path = `/vue/component/${kebabName}`;
    const pathEn = `/vue/en-US/component/${kebabName}`;
    routes.push(
      {
        path,
        component,
      },
      {
        path: pathEn,
        component: componentEn ?? component,
      },
    );

    group.menu.push({
      name,
      path,
    });
  });

  componentMenu.push(group);
});

const menuList = [
  {
    name: 'docs',
    menu: docsMenu,
  },
  {
    name: 'component',
    isGroup: true,
    menu: componentMenu,
  },
];

routes.push({ path: '/vue/en-US', redirect: '/vue/en-US/docs/start' });
routes.push({ path: '/:pathMatch(.*)*', redirect: '/vue/docs/start' });

nProgress.configure({ minimum: 0.4, showSpinner: false });

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from) => {
  if (to.path !== from.path) {
    nProgress.start();
    clearAnchors();
  }
});

router.afterEach(() => {
  nProgress.done();
});

export { docsMenu, componentMenu, menuList };
export default router;
