```yaml
title:
  zh-CN: 多行文本
  en-US: Multiline Text
description:
  zh-CN: 通过 content 设置字符串数组可指定多行文字水印内容。
  en-US: Multiline text watermarks can be specified with the content set string array.
```

```vue
<template>
  <a-watermark :content="['arco.design', today]">
    <div style="width: 100%; height: 300px;" />
  </a-watermark>
</template>
<script setup>
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD')
</script>
```
