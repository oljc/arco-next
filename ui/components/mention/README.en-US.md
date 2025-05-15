```yaml
meta:
  type: Component
  category: Data Entry
title: Mention
description: Used to mention someone or something in the input, often used for posting, chatting or commenting.
```

@import ./**demo**/basic.md

@import ./**demo**/prefix.md

## API

### `<Mention>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|model-value **(v-model)**|Value|`string`|`-`||
|default-value|Default value (uncontrolled state)|`string`|`''`||
|data|Data for automatic completion|`(string \| number \| SelectOptionData \| SelectOptionGroup)[]`|`[]`||
|prefix|Keywords that trigger auto-completion|`string \| string[]`|`'@'`||
|split|Before and after the selected item separator|`string`|`' '`||
|type|default input or textarea|`'input' \| 'textarea'`|`'input'`||
|disabled|Whether to disable|`boolean`|`false`||
|allow-clear|Whether to allow the input to be cleared|`boolean`|`false`|2.23.0|