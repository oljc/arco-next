```yaml
title:
  zh-CN: 基本使用
  en-US: Basic Usage
description:
  zh-CN: 验证码输入框的基本用法。
  en-US: Basic usage of verification code input box.
```

```vue
<template>
  <a-verification-code v-model="value" style="width: 300px" @finish="onFinish" />
</template>

<script setup>
import { ref } from 'vue';
import { Message } from 'arco-next';

const value = ref('654321');
const onFinish = (value) => Message.info(`Verification code: ${value}`);
</script>
```
