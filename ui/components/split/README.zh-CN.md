```yaml
meta:
  type: 组件
  category: 其他
title: 面板分割 Split
description: 将面板分割成两部分。
```

@import ./**demo**/basic.md

@import ./**demo**/nested.md

## API

### `<Split>` Props

|参数名|描述|类型|默认值|
|---|---|---|---|
|component|分割框的 html 标签|`string`|`'div'`|
|direction|分割的方向|`'horizontal' \| 'vertical'`|`'horizontal'`|
|size **(v-model)**|分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px|`number\|string`|`-`|
|default-size|默认分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px|`number\|string`|`0.5`|
|min|最小阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px|`number\|string`|`-`|
|max|最大阈值，可以是 0~1 代表百分比，或具体数值的像素，如 300px|`number\|string`|`-`|
|disabled|是否禁用|`boolean`|`false`|