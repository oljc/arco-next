<template>
  <section :id="id" class="code-block">
    <anchor-head :level="2" :href="`#${id}`" :title="title" />
    <slot v-if="locale == 'zh-CN'" name="zh"></slot>
    <slot v-if="locale == 'en-US'" name="en"></slot>
    <slot />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AnchorHead from '@/components/anchor-head/index.vue';

const props = defineProps<{
  id?: string;
  data?: {
    title: Record<string, string>;
  };
}>();

const { locale } = useI18n();

const title = computed(() => {
  return props.data?.title[locale.value] || props.data?.title['zh-CN'];
});
</script>

<style scoped lang="less">
.code-block {
  h2 {
    margin: 48px 0 12px;
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 20px;
  }

  :deep(p) {
    line-height: 1.5;
  }
}
</style>
