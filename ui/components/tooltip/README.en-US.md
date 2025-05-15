```yaml
meta:
  type: Component
  category: Data Display
title: Tooltip
description: A tooltip that popup when the mouse hovers, focus, or click on a component.
```

@import ./**demo**/basic.md

@import ./**demo**/mini.md

@import ./**demo**/position.md

@import ./**demo**/color.md

`<tooltip>` 组件继承 `<trigger>` 组件的全部属性

## API

### `<Tooltip>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|popup-visible **(v-model)**|Whether the tooltip is visible|`boolean`|`-`|
|default-popup-visible|Whether the tooltip is visible by default (uncontrolled mode)|`boolean`|`false`|
|content|Tooltip content|`string`|`-`|
|position|Popup position|`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'`|`'top'`|
|mini|Whether to display as a mini size|`boolean`|`false`|
|background-color|Background color of the popover|`string`|`-`|
|content-class|The class name of the popup content|`ClassName`|`-`|
|content-style|The style of the popup content|`CSSProperties`|`-`|
|arrow-class|The class name of the popup arrow|`ClassName`|`-`|
|arrow-style|The style of the popup arrow|`CSSProperties`|`-`|
|popup-container|Mount container for popup|`string \| HTMLElement`|`-`|