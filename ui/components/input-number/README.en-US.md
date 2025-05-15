```yaml
meta:
  type: Component
  category: Data Entry
title: InputNumber
description: Only input boxes in numeric format are allowed.
```

@import ./**demo**/basic.md

@import ./**demo**/mode.md

@import ./**demo**/size.md

@import ./**demo**/precision.md

@import ./**demo**/prefix.md

@import ./**demo**/step-icon.md

@import ./**demo**/format.md

@import ./**demo**/model.md

## API

### `<InputNumber>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|model-value **(v-model)**|Value|`number`|`-`||
|default-value|Default value (uncontrolled mode)|`number`|`-`||
|mode|Mode (`embed`: button embedded mode, `button`: left and right button mode)|`'embed' \| 'button'`|`'embed'`||
|precision|Precision|`number`|`-`||
|step|Number change step|`number`|`1`||
|disabled|Whether to disable|`boolean`|`false`||
|error|Whether it is an error state|`boolean`|`false`||
|max|Max|`number`|`Infinity`||
|min|Min|`number`|`-Infinity`||
|formatter|Define the display value of the input|`func`|`-`||
|parser|Convert from `formatter` to number, and use with `formatter`|`func`|`-`||
|placeholder|Input prompt text|`string`|`-`||
|hide-button|Whether to hide the button|`boolean`|`false`||
|size|Input size|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`||
|allow-clear|Whether to allow the input to be cleared|`boolean`|`false`||
|model-event|Trigger event for `v-model`|`'change' \| 'input'`|`'change'`||
|read-only|Readonly|`boolean`|`false`|2.33.1|
|input-attrs|Attributes of inner input elements|`object`|`-`|2.52.0|