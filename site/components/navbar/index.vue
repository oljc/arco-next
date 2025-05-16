<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <logo-arco v-if="actualTheme === 'light'" />
      <logo-arco-dark v-if="actualTheme === 'dark'" />
    </div>
    <div class="navbar-right">
      <a-tooltip content="切换语言">
        <a-button class="navbar-button" type="text">
          <template #icon>
            <icon-language />
          </template>
        </a-button>
      </a-tooltip>
      <a-link class="navbar-link" href="https://github.com/oljc/arco-next" target="_blank">
        <icon-github />
      </a-link>
      <a-tooltip
        :content="theme === 'system' ? '跟随系统' : theme === 'light' ? '浅色模式' : '深色模式'"
      >
        <a-button class="navbar-button" type="text" @click="toggleTheme()">
          <template #icon>
            <icon-moon-fill v-if="theme === 'light'" />
            <icon-sun-fill v-if="theme === 'dark'" />
            <icon-computer v-if="theme === 'system'" />
          </template>
        </a-button>
      </a-tooltip>
    </div>
  </nav>
</template>

<script setup lang="ts">
import LogoArco from '@/assets/logo-arco-design.svg';
import LogoArcoDark from '@/assets/logo-arco-design-dark.svg';
import { useTheme } from '@/hooks/useTheme';
import {
  IconGithub,
  IconLanguage,
  IconMoonFill,
  IconSunFill,
  IconComputer,
} from 'arco-next/components/icon';

const { theme, actualTheme, toggleTheme } = useTheme();
</script>

<style lang="less" scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);

  &-right {
    display: flex;
    margin-left: auto;
    gap: 8px;
  }

  &-button {
    margin: 0;
    color: var(--color-text-1) !important;
    font-size: 18px;
    border-radius: 6px;
  }

  &-link {
    width: 32px;
    height: 32px;
    padding: 0;
    margin: 0;
    color: var(--color-text-1) !important;
    font-size: 18px;
    border-radius: 6px;
  }
}
</style>
