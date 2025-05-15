```yaml
meta:
  type: Component
  category: Data Entry
title: Radio
description: In a set of related and mutually exclusive data, the user can only select one option.
```

@import ./**demo**/basic.md

@import ./**demo**/control.md

@import ./**demo**/group.md

@import ./**demo**/options.md

@import ./**demo**/direction.md

@import ./**demo**/button.md

@import ./**demo**/size.md

@import ./**demo**/layout.md

@import ./**demo**/custom.md

## API

### `<Radio>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|model-value **(v-model)**|Value|`string \| number \| boolean`|`-`|
|default-checked|Whether checked by default (uncontrolled state)|`boolean`|`false`|
|value|The `value` of the option|`string \| number \| boolean`|`true`|
|type|Radio type|`'radio' \| 'button'`|`'radio'`|
|disabled|Whether to disable|`boolean`|`false`|
|uninject-group-context||`boolean`|`false`|

### `<RadioGroup>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|model-value **(v-model)**|Value|`string \| number \| boolean`|`-`||
|default-value|Default value (uncontrolled state)|`string \| number \| boolean`|`''`||
|type|Types of radio group|`'radio' \| 'button'`|`'radio'`||
|size|The size of the radio group|`'mini' \| 'small' \| 'medium' \| 'large'`|`-`||
|options|Options|`Array<string \| number \| RadioOption>`|`-`|2.27.0|
|direction|The direction of the radio group|`'horizontal' \| 'vertical'`|`'horizontal'`||
|disabled|Whether to disable|`boolean`|`false`||

### RadioOption

|Parameter|Description|Type|Default|
|---|---|---|---|
|label|label content|`RenderContent`|``|
|value **(required)**|The `value` of the option|`string \| number`|``|
|disabled|Whether to disable|`boolean`|``|