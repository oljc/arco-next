```yaml
meta:
  type: Component
  category: Data Entry
title: Textarea
description: Multi-line plain text edit control, suitable for a paragraph of opinion in the comment or feedback form.
```

@import ./**demo**/basic.md

@import ./**demo**/status.md

@import ./**demo**/word-limit.md

@import ./**demo**/auto-size.md

## API

### `<Textarea>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|model-value **(v-model)**|Value|`string`|`-`||
|default-value|Default value (uncontrolled state)|`string`|`''`||
|placeholder|Placeholder|`string`|`-`||
|disabled|Whether to disable|`boolean`|`false`||
|error|Whether it is an error state|`boolean`|`false`||
|max-length|Maximum length of input value, the errorOnly attribute was added in version 2.12.0|`number \| { length: number; errorOnly?: boolean }`|`0`||
|show-word-limit|Whether to display word count|`boolean`|`false`||
|allow-clear|Whether to allow clearing the text|`boolean`|`false`||
|auto-size|Whether to make the textarea adapt to the height of the content|`boolean \| { minRows?: number; maxRows?: number }`|`false`||
|word-length|Calculation method of word length|`(value: string) => number`|`-`||
|word-slice|Character interception method, used together with wordLength|`(value: string, maxLength: number) => string`|`-`|2.12.0|
|textarea-attrs|Attributes passed to textarea|`Record<string, any>`|`-`||