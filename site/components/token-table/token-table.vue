<template>
  <a-table :columns="columns" :data="data" :pagination="false">
    <template #name="{ record }">
      <div class="token-content">
        <div
          v-if="type === 'color'"
          class="token-sample"
          :style="{
            backgroundColor: dark ? (record.darkValue ?? record.value) : record.value,
          }"
        />
        <div class="token-text">
          {{ type === 'color' && dark ? `dark-${record.name}` : record.name }}
        </div>
      </div>
    </template>
    <template #value="{ record }">
      <span class="token-value" @click="onValueClick">
        {{ dark ? (record.darkValue ?? record.value) : record.value }}
      </span>
    </template>
    <template #cssvar="{ record }">
      {{ record.cssvar ? `--${record.name}` : '-' }}
    </template>
  </a-table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Message } from 'arco-next';
import clipboard from '@/utils/clipboard';

type TokenType = 'color' | 'size';

interface TokenRecord {
  name: string;
  value: string;
  darkValue?: string;
  cssvar?: boolean;
  desc?: string;
  descEN?: string;
}

const props = defineProps<{
  data?: TokenRecord[];
  type?: TokenType;
  dark?: boolean;
  local?: string;
}>();

const columns = computed(() => {
  return [
    {
      title: props.local === 'en-US' ? 'Token' : '变量名',
      dataIndex: 'name',
      slotName: 'name',
      width: 200,
    },
    {
      title: props.local === 'en-US' ? 'Value' : '变量值',
      dataIndex: 'value',
      width: 250,
      slotName: 'value',
    },
    {
      title: props.local === 'en-US' ? 'Css Var' : 'CSS变量',
      dataIndex: 'cssvar',
      slotName: 'cssvar',
      width: 200,
    },
    {
      title: props.local === 'en-US' ? 'Description' : '描述',
      dataIndex: props.local === 'en-US' ? 'descEN' : 'desc',
    },
  ];
});

const onValueClick = (ev: Event) => {
  const text = (ev.target as HTMLElement).textContent;
  if (text) {
    clipboard(text)
      .then(() => {
        Message.success(`Copy Success!`);
      })
      .catch(() => {
        Message.error('Copy Failed! Please try again.');
      });
  }
};
</script>

<style lang="less">
.token-content {
  display: flex;
  align-items: center;

  .token-sample {
    margin-right: 8px;
    width: 16px;
    height: 16px;
    border-radius: 2px;
  }
}

.token-value {
  cursor: pointer;
}
</style>
