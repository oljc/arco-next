```yaml
meta:
  type: 组件
  category: 通用
title: 链接 Link
description: 链接的基本样式。
```

@import ./**demo**/basic.md

@import ./**demo**/status.md

@import ./**demo**/hoverable.md


## API

### `<link>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|href|链接地址|`string`|`-`||
|status|链接的状态|`'normal' \| 'warning' \| 'success' \| 'danger'`|`'normal'`||
|hoverable|鼠标悬浮时存在底色|`boolean`|`true`|2.7.0|
|icon|图标|`boolean`|`-`|2.7.0|
|loading|链接是否为加载中状态|`boolean`|`-`|2.37.0|
|disabled|链接是否禁用|`boolean`|`-`||