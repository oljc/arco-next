```yaml
meta:
  type: 组件
  category: 数据展示
title: 气泡卡片 Popover
description: 鼠标悬停、聚焦或点击在某个组件时，弹出的气泡式的卡片浮层。可以对卡片上的元素进行操作。
```

@import ./**demo**/basic.md

@import ./**demo**/trigger.md

@import ./**demo**/position.md

`<popover>` 组件继承 `<trigger>` 组件的全部属性

## API

### `<Popover>` Props

|参数名|描述|类型|默认值|
|---|---|---|---|
|popup-visible **(v-model)**|文字气泡是否可见|`boolean`|`-`|
|default-popup-visible|文字气泡默认是否可见（非受控模式）|`boolean`|`false`|
|title|标题|`string`|`-`|
|content|内容|`string`|`-`|
|trigger|触发方式|`'hover' \| 'click' \| 'focus' \| 'contextMenu'`|`'hover'`|
|position|弹出位置|`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'`|`'top'`|
|content-class|弹出框内容的类名|`ClassName`|`-`|
|content-style|弹出框内容的样式|`CSSProperties`|`-`|
|arrow-class|弹出框箭头的类名|`ClassName`|`-`|
|arrow-style|弹出框箭头的样式|`CSSProperties`|`-`|
|popup-container|弹出框的挂载容器|`string \| HTMLElement`|`-`|