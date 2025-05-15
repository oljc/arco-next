<template>
  <div :class="cls">
    <div class="cell-code-operation">
      <a-tooltip :content="showCode ? t('tooltip.collapse') : t('tooltip.expand')">
        <a-button
          :class="[
            'cell-code-operation-btn',
            {
              ['cell-code-operation-btn-active']: showCode,
            },
          ]"
          shape="circle"
          size="small"
          @click="handleClick"
        >
          <icon-code />
        </a-button>
      </a-tooltip>
      <a-tooltip :content="t('tooltip.copy')">
        <a-button
          class="cell-code-operation-btn"
          shape="circle"
          size="small"
          @click="handleClickCopy"
        >
          <icon-copy />
        </a-button>
      </a-tooltip>
      <a-tooltip :content="t('tooltip.stackblitz')">
        <a-button
          class="cell-code-operation-btn"
          shape="circle"
          size="small"
          @click="handleClickStackblitz"
        >
          <icon-thunderbolt />
        </a-button>
      </a-tooltip>
      <a-tooltip :content="t('tooltip.codeSandbox')">
        <a-button
          class="cell-code-operation-btn"
          shape="circle"
          size="small"
          @click="handleClickCodeSandbox"
        >
          <icon-code-sandbox />
        </a-button>
      </a-tooltip>
    </div>
    <div ref="contentRef" class="cell-code-content" :style="style">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, CSSProperties, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Message } from 'arco-next';
import copy from '@/utils/clipboard';
import { openStackblitz } from '@/utils/code-stackblitz';
import { openCodeSandbox } from '@/utils/code-sandbox';
import {
  IconCode,
  IconCopy,
  IconThunderbolt,
  IconCodeSandbox,
} from 'arco-next/components/icon';

const { t } = useI18n();
const showCode = ref(false);
const contentRef = ref<HTMLElement>();
const contentHeight = ref<number>(0);

onMounted(() => {
  if (contentRef.value) {
    const { height } = contentRef.value.getBoundingClientRect();
    contentHeight.value = height;
  }
});

const style = computed<CSSProperties>(() => {
  if (showCode.value) {
    const height = contentRef?.value?.firstElementChild?.clientHeight;
    return { height: height ? `${height}px` : 'auto' };
  }
  return { height: 0 };
});

const handleClick = () => {
  showCode.value = !showCode.value;
};

const handleClickCopy = () => {
  if (contentRef.value?.textContent) {
    copy(contentRef.value.textContent)
      .then(() => {
        Message.success('Copy Success!');
      })
      .catch(() => {
        Message.error('Copy Failed! Please try again.');
      });
  }
};

const handleClickStackblitz = () => {
  if (contentRef.value?.textContent) {
    openStackblitz(contentRef.value.textContent);
  }
};

const handleClickCodeSandbox = () => {
  if (contentRef.value?.textContent) {
    openCodeSandbox(contentRef.value.textContent);
  }
};

const cls = computed(() => ['cell-code']);
</script>

<style scoped lang="less">
.cell-code {
  margin-top: 12px;
  &-content {
    margin-top: 16px;
    overflow: hidden;
    background-color: var(--color-fill-1);
    transition: height 200ms;
  }

  &-operation {
    display: flex;
    justify-content: flex-end;

    & &-btn {
      margin-left: 8px;
      background-color: var(--color-bg-4);
      border: 1px solid var(--color-fill-3);

      &:hover {
        color: rgb(var(--primary-6));
        border-color: rgb(var(--primary-6));
      }

      &-active {
        color: rgb(var(--gray-1));
        background-color: rgb(var(--gray-10));
        border-color: rgb(var(--gray-1));

        &:hover {
          color: rgb(var(--gray-1));
          background-color: rgb(var(--gray-10));
          border-color: rgb(var(--gray-1));
        }
      }
    }
  }
}
</style>
