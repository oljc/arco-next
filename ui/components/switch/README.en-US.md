```yaml
meta:
  type: Component
  category: Data Entry
title: Switch
description: Mutually exclusive operation controls, users can turn on or turn off a certain function.
```

@import ./**demo**/basic.md

@import ./**demo**/type.md

@import ./**demo**/size.md

@import ./**demo**/disabled.md

@import ./**demo**/color.md

@import ./**demo**/value.md

@import ./**demo**/change-intercept.md

@import ./**demo**/loading.md

@import ./**demo**/text.md

@import ./**demo**/icon.md

## API

### `<Switch>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|model-value **(v-model)**|Value|`string\|number\|boolean`|`-`||
|default-checked|Default selected state (uncontrolled state)|`boolean`|`false`||
|disabled|Whether to disable|`boolean`|`false`||
|loading|Whether it is loading state|`boolean`|`false`||
|type|Type of switch|`'circle' \| 'round' \| 'line'`|`'circle'`||
|size|Size of switch|`'small' \| 'medium'`|`'medium'`||
|checked-value|Value when checked|`string\|number\|boolean`|`true`|2.12.0|
|unchecked-value|Value when unchecked|`string\|number\|boolean`|`false`|2.12.0|
|checked-color|The color of the switch when checked|`string`|`-`|2.12.0|
|unchecked-color|The color of the switch when unchecked|`string`|`-`|2.12.0|
|before-change|before-change hook before the switch state changes. If false is returned or a Promise is returned and then is rejected, will stop switching|`(newValue: string \| number \| boolean) => Promise<boolean \| void> \| boolean \| void`|`-`|2.37.0|
|checked-text|Copywriting when opened (not effective when `type='line'` and `size='small'`)|`string`|`-`|2.45.0|
|unchecked-text|Copywriting when closed (not effective when `type='line'` and `size='small'`)|`string`|`-`|2.45.0|