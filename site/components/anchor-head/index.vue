<template>
  <component :is="`h${level}`" class="anchor-head">
    <a class="anchor-link" :href="href" @click.prevent="handleClickCopy">
      <icon-link />
    </a>
    {{ title }}
  </component>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { Message } from 'arco-next';
import { articleInjectionKey } from '@/utils/inject';
import { IconLink } from 'arco-next/components/icon';
import copy from '@/utils/clipboard';

const {
  title = '',
  href = '',
  level = 2,
} = defineProps<{
  title?: string;
  href?: string;
  level?: number | string;
}>();

const articleCtx = inject(articleInjectionKey);
articleCtx?.addAnchor({ href, title });

const handleClickCopy = (e: MouseEvent) => {
  const copyLink = (e.currentTarget as HTMLAnchorElement).href;
  if (copyLink) {
    copy(copyLink)
      .then(() => {
        Message.success('Copy Success!');
      })
      .catch(() => {
        Message.error('Copy Failed! Please try again.');
      });
  }
};
</script>

<style scoped lang="less">
.anchor-head {
  position: relative;

  &:hover {
    .anchor-link {
      opacity: 1;
    }
  }

  .anchor-link {
    position: absolute;
    top: 50%;
    left: -22px;
    display: inline-block;
    padding-right: 6px;
    color: var(--color-text-3);
    font-size: 16px;
    transform: translateY(-50%);
    opacity: 0;

    &:hover {
      color: rgb(var(--primary-6));
    }
  }
}
</style>
