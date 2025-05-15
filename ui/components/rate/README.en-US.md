```yaml
meta:
  type: Component
  category: Data Entry
title: Rate
description: The component used for scoring or starring.
```

@import ./**demo**/basic.md

@import ./**demo**/half.md

@import ./**demo**/color.md

@import ./**demo**/readonly.md

@import ./**demo**/clear.md

@import ./**demo**/character.md

@import ./**demo**/count.md

@import ./**demo**/grading.md

## API

### `<Rate>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|count|Total number of rate|`number`|`5`||
|model-value **(v-model)**|Value|`number`|`-`||
|default-value|Default Value|`number`|`0`||
|allow-half|Whether to allow half selection|`boolean`|`false`||
|allow-clear|Whether to allow clear|`boolean`|`false`||
|grading|Whether to enable smile grading|`boolean`|`false`||
|readonly|Whether it is readonly|`boolean`|`false`||
|disabled|Whether to disable|`boolean`|`false`||
|color|Color|`string \| Record<string, string>`|`-`|2.18.0|