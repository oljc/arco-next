```yaml
title:
  zh-CN: 图标
  en-US: Icon
description:
  zh-CN: 可以通过 icon 属性设置带图标的链接。
  en-US: You can use the icon property to set a link with an icon.
```

```vue
<template>
  <div>
    <a-space>
      <a-link href="link" icon>Link</a-link>
      <a-link href="link" disabled icon>Link</a-link>
    </a-space>
  </div>
  <div>
    <a-space>
      <a-link href="link">
        <template #icon>
          <icon-edit />
        </template>
        Link
      </a-link>
      <a-link href="link" disabled>
        <template #icon>
          <icon-edit />
        </template>
        Link
      </a-link>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { IconEdit } from 'arco-next/es/icon';
</script>
```
