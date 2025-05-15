<template>
  <aside :class="cls">
    <div class="anchor-container">
      <div class="aside-top">
        <a-button class="aside-collapse-btn" shape="circle" size="large" @click="toggleAnchor">
          <IconRight v-if="model" />
          <IconLeft v-else />
        </a-button>
      </div>
      <a-anchor v-if="anchors && anchors.length > 0" line-less :boundary="80">
        <a-anchor-link
          v-for="(item, index) in anchors"
          :key="index"
          :href="item.href"
          :title="item.title"
          class="link"
        />
      </a-anchor>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { AnchorData } from './interface';
import { IconRight, IconLeft } from 'arco-next/components/icon';

defineProps<{ anchors?: AnchorData[] }>();

const model = defineModel<boolean>({ default: true });

const toggleAnchor = () => {
  model.value = !model.value;
};

const cls = computed(() => [
  'aside-anchor',
  {
    'aside-anchor-collapse': !model.value,
  },
]);
</script>

<style lang="less">
.aside-anchor {
  position: relative;
  min-width: 180px;
  transition: all 200ms;

  .anchor-container {
    position: fixed;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 60px 18px 0 18px;
  }

  .aside-top {
    margin: 36px 0;
  }

  .arco-anchor {
    height: 60%;
    background-color: var(--color-bg-1);
  }

  .aside-collapse-btn {
    position: relative;
    left: 12px;
    transition: all 200ms;
  }

  .link {
    .arco-anchor-link {
      font-size: 13px;
      line-height: 1.5;
    }
  }

  &&-collapse {
    min-width: 0;
    .aside-collapse-btn {
      left: -52px;
      width: 28px;
      background-color: var(--color-bg-5);
      border-radius: 18px 0 0 18px;
      box-shadow: -1px 0 5px 0 rgb(0 0 0 / 10%);
    }
  }
}
</style>
