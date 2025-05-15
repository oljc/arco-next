```yaml
meta:
  type: 组件
  category: 其他
title: 伸缩框 ResizeBox
description: 伸缩框组件。
```

@import ./**demo**/basic.md

@import ./**demo**/controlled.md

@import ./**demo**/layout.md

@import ./**demo**/custom-triggers.md

## API

### `<ResizeBox>` Props

|参数名|描述|类型|默认值|
|---|---|---|---|
|width **(v-model)**|宽度|`number`|`-`|
|height **(v-model)**|高度|`number`|`-`|
|component|伸缩框的 html 标签|`string`|`'div'`|
|directions|可以进行伸缩的边，有上、下、左、右可以使用|`('left' \| 'right' \| 'top' \| 'bottom')[]`|`['right']`|