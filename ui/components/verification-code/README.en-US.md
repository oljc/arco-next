```yaml
meta:
  type: Component
  category: Data Entry
title: VerificationCode
description: Verification code input component.
```

@import ./**demo**/basic.md
@import ./**demo**/status.md
@import ./**demo**/masked.md
@import ./**demo**/separator.md
@import ./**demo**/form.md
@import ./**demo**/formatter.md

## API

### `<VerificationCode>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|model-value **(v-model)**|Value|`string`|`-`|
|default-value|Default value (uncontrolled state)|`string`|`''`|
|length|The length of the verification code, rendering the corresponding number of input boxes according to the length.|`number`|`6`|
|size|Input size|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`|
|disabled|Whether to disable|`boolean`|`-`|
|masked|Password mode|`boolean`|`-`|
|readonly|Readonly|`boolean`|`-`|
|error|Whether it is an error state|`boolean`|`false`|
|separator|Separator. Customizable rendering separators after input boxes with different indexes|`(index: number, character: string) => VNode`|`-`|
|formatter|Formatter function, triggered when the user input value changes|`(inputValue: string, index: number, value: string) => string \| boolean`|`-`|