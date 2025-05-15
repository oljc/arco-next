<template>
  <div class="docs-site">
    <navbar />
    <main class="main-docs">
      <aside-nav />
      <router-view />
      <aside-anchor :anchors="anchors" />
    </main>
    <arco-footer />
    <a-back-top :style="{ right: '70px', bottom: '80px' }">
      <a-button class="site-backtop-btn" shape="circle" size="large">
        <icon-up />
      </a-button>
    </a-back-top>
  </div>
</template>

<script setup lang="ts">
import { provide, reactive } from 'vue';
import { articleInjectionKey } from '@/utils/inject';
import { IconUp } from 'arco-next/components/icon';
import Navbar from '@/components/navbar/index.vue';
import AsideNav from '@/components/aside-nav/index.vue';
import AsideAnchor from '@/components/aside-anchor/index.vue';
import ArcoFooter from '@/components/footer/index.vue';
import { anchors, addAnchor, clearAnchors } from '@/utils/anchor';

defineOptions({
  name: 'App',
});

defineProps<{
  theme?: string;
  language?: string;
}>();

provide(
  articleInjectionKey,
  reactive({
    anchors,
    addAnchor,
    clearAnchors,
  }),
);
</script>

<style lang="less" src="./style/index.less" />

<style lang="less">
.main-docs {
  display: flex;
  color: var(--color-text-2);
  font-size: 14px;
  background-color: var(--color-bg-1);
  transition: all 300ms;

  h1,
  h2,
  h3,
  h4 {
    color: var(--color-text-1);
    font-weight: 500;
  }

  .site-backtop-btn {
    background: var(--color-bg-5) !important;
    border: 1px solid var(--color-fill-3) !important;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }

  .link {
    color: rgb(var(--arcoblue-6));
    text-decoration: none;
  }
}
</style>
