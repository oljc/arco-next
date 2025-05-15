import { ref } from 'vue';
import { getLocalStorage, setLocalStorage } from '../utils/local-storage';

export const useLanguage = () => {
  const localLanguage = getLocalStorage('vue-site::lang');
  const language = ref(localLanguage ?? 'zh-CN');

  const handleLanguageChange = (_language: string) => {
    if (['zh-CN', 'en-US'].includes(_language) && _language !== language.value) {
      language.value = _language;
      setLocalStorage('vue-site::lang', _language);
    }
  };

  return {
    language,
    handleLanguageChange,
  };
};
