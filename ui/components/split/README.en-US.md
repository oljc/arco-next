```yaml
meta:
  type: Component
  category: Other
title: Split
description: Divide the panel into two parts.
```

@import ./**demo**/basic.md

@import ./**demo**/nested.md

## API

### `<Split>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|component|The html tag of the split box|`string`|`'div'`|
|direction|Direction of division|`'horizontal' \| 'vertical'`|`'horizontal'`|
|size **(v-model)**|The size of the segmentation, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px|`number\|string`|`-`|
|default-size|Default split size, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px|`number\|string`|`0.5`|
|min|Minimum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px|`number\|string`|`-`|
|max|Maximum threshold, it can be 0~1 representing a percentage, or a specific number of pixels, such as 300px|`number\|string`|`-`|
|disabled|Whether to disable|`boolean`|`false`|