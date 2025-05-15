<template>
  <Tabs class="install-tabs" default-active-key="pnpm" size="mini" destroy-on-hide>
    <TabPane v-for="item in cmd" :key="item">
      <template #title>
        <div class="install-tabs-title">
          <Pnpm v-if="item === 'pnpm'" />
          <Npm v-if="item === 'npm'" />
          <Yarn v-if="item === 'yarn'" />
          <Bun v-if="item === 'bun'" />
          <span>{{ item }}</span>
        </div>
      </template>
      <pre class="code-content"><code class="lang-shell"><slot :name="item" /></code></pre>
    </TabPane>
  </Tabs>
</template>

<script setup lang="ts">
import { Tabs, TabPane } from 'arco-next';
import Bun from '@/assets/icon/bun.svg';
import Pnpm from '@/assets/icon/pnpm.svg';
import Npm from '@/assets/icon/npm.svg';
import Yarn from '@/assets/icon/yarn.svg';

const cmd = ['npm', 'pnpm', 'yarn', 'bun'];
</script>

<style lang="less">
.install-tabs {
  &-title {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    svg {
      margin-top: 1px;
    }
  }
}
</style>
