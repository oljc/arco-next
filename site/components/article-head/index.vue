<template>
  <div class="article-header">
    <div v-if="meta" class="article-meta">
      <span class="article-type">{{ meta.type }}</span>
      <template v-if="meta.category">
        <span class="separator">/</span>
        <span class="article-category">{{ meta.category }}</span>
      </template>
    </div>
    <h1 class="article-title">{{ title }}</h1>
    <div v-if="description" class="article-description">
      {{ description }}
    </div>
    <!-- <div>最近更新：2025-04-21</div> -->
    <!-- <div>源码：components/button</div> -->
    <!-- <ChangelogBox :changelog="changelog" /> -->
  </div>
</template>

<script setup lang="ts">
// import ChangelogBox from '@/components/changelog-box/index.vue';

defineProps<{
  title?: string;
  description?: string;
  changelog?: any[];
  meta?: { category: string; type: string };
}>();
</script>

<style lang="less" scoped>
.article-header {
  position: relative;
  padding: 36px 0;
  border-bottom: 1px solid var(--color-border);
}

.article-meta {
  .separator {
    padding: 0 5px;
    color: var(--color-text-4);
  }

  .article-category {
    color: var(--color-text-1);
    font-weight: 500;
  }
}

.article-title {
  margin: 20px 0 12px;
  color: var(--color-text-1);
  font-weight: 500;
  font-size: 36px;
}

.article-description {
  color: var(--color-text-2);
  line-height: 20px;

  &:not(:last-child) {
    margin-right: 200px;
  }
}
</style>
