import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { installComponents } from '@/components';
import router from '@/router';
import locale from '@/locale';
import App from './app.vue';
import { setLocalStorage } from './utils/local-storage';
import ArcoVue, { addI18nMessages, useLocale } from 'arco-next/components';
import ArcoVueIcon from 'arco-next/es/icon';
import enUS from 'arco-next/components/locale/lang/en-us';
import 'prismjs/themes/prism.min.css';
import 'nprogress/nprogress.css';
import 'arco-next/components/index.less';

const lang = /en-US/i.test(window.location.href) ? 'en-US' : 'zh-CN';
setLocalStorage('arco-lang', lang);

const handleLanguageChange = (lang: string) => {
  if (lang === 'zh-CN' && /en-US/i.test(window.location.href)) {
    setLocalStorage('arco-lang', lang);
    window.location.href = window.location.href.replace(/en-US\//i, '');
  } else if (lang === 'en-US' && !/en-US/i.test(window.location.href)) {
    setLocalStorage('arco-lang', lang);
    window.location.href = window.location.href.replace('/vue', '/vue/en-US');
  }
};

handleLanguageChange(lang);

const i18n = createI18n({
  legacy: false,
  locale: lang,
  fallbackLocale: 'zh-CN',
  messages: locale,
});

addI18nMessages({ 'en-US': enUS });

if (lang === 'en-US') {
  useLocale(lang);
}

const app = createApp(App, {
  language: lang,
});
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(router);
app.use(i18n);
installComponents(app);
app.mount('#app');
