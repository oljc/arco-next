```yaml
meta:
  type: Component
  category: Feedback
title: Popconfirm
description: Click on the element and a popconfirm will pop up.
```

@import ./**demo**/basic.md

@import ./**demo**/custom.md

@import ./**demo**/position.md

@import ./**demo**/type.md

`<popconfirm>` 组件继承 `<trigger>` 组件的全部属性

## API

### `<Popconfirm>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|content|Content|`string`|`-`|
|position|Popup position|`'top' \| 'tl' \| 'tr' \| 'bottom' \| 'bl' \| 'br' \| 'left' \| 'lt' \| 'lb' \| 'right' \| 'rt' \| 'rb'`|`'top'`|
|popup-visible **(v-model)**|Whether the popconfirm is visible|`boolean`|`-`|
|default-popup-visible|Whether the popconfirm is visible by default (uncontrolled mode)|`boolean`|`false`|
|type|Types of the popconfirm|`'info' \| 'success' \| 'warning' \| 'error'`|`'info'`|
|ok-text|The content of the ok button|`string`|`-`|
|cancel-text|The content of the cancel button|`string`|`-`|
|ok-loading|Whether the ok button is in the loading state|`boolean`|`false`|
|ok-button-props|Props of ok button|`ButtonProps`|`-`|
|cancel-button-props|Props of cancel button|`ButtonProps`|`-`|
|content-class|The class name of the popup content|`ClassName`|`-`|
|content-style|The style of the popup content|`CSSProperties`|`-`|
|arrow-class|The class name of the popup arrow|`ClassName`|`-`|
|arrow-style|The style of the popup arrow|`CSSProperties`|`-`|
|popup-container|Mount container for popup|`string \| HTMLElement`|`-`|
|on-before-ok|The callback function before the ok event is triggered. If false is returned, subsequent events will not be triggered, and done can also be used to close asynchronously.|`(done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>`|`-`|
|on-before-cancel|The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.|`() => boolean`|`-`|