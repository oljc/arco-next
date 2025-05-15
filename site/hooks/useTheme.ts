import { ref, onMounted, onUnmounted } from 'vue';
import { getLocalStorage, setLocalStorage } from '@/utils/local-storage';

type ThemeType = 'light' | 'dark' | 'system';
type AppTheme = 'light' | 'dark';

export const useTheme = () => {
  const validThemes: ThemeType[] = ['light', 'dark', 'system'];
  const savedTheme = getLocalStorage('arco-theme');
  const theme = ref<ThemeType>(
    validThemes.includes(savedTheme as ThemeType) ? (savedTheme as ThemeType) : 'system',
  );

  const actualTheme = ref<AppTheme>('light');

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const applyTheme = (isDark: boolean) => {
    const newTheme: AppTheme = isDark ? 'dark' : 'light';
    actualTheme.value = newTheme;

    if (isDark) {
      document.body.setAttribute('arco-theme', 'dark');
    } else {
      document.body.removeAttribute('arco-theme');
    }
  };

  const updateTheme = () => {
    const isDark = theme.value === 'dark' || (theme.value === 'system' && mediaQuery.matches);
    applyTheme(isDark);
  };

  const toggleTheme = (value?: ThemeType) => {
    if (value) {
      theme.value = value;
    } else {
      // 循环切换：light -> dark -> system -> light
      theme.value = theme.value === 'light' ? 'dark' : theme.value === 'dark' ? 'system' : 'light';
    }

    updateTheme();
    setLocalStorage('arco-theme', theme.value);
  };

  const handleSystemThemeChange = () => {
    if (theme.value === 'system') {
      updateTheme();
    }
  };

  onMounted(() => {
    updateTheme();
    mediaQuery.addEventListener('change', handleSystemThemeChange);
  });

  onUnmounted(() => {
    mediaQuery.removeEventListener('change', handleSystemThemeChange);
  });

  return {
    theme,
    actualTheme,
    toggleTheme,
  };
};
