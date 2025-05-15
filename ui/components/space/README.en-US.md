```yaml
meta:
  type: Component
  category: Layout
title: Space
description: Set the spacing between components.
```

@import ./**demo**/basic.md

@import ./**demo**/vertical.md

@import ./**demo**/size.md

@import ./**demo**/align.md

@import ./**demo**/wrap.md

@import ./**demo**/split.md

## API

### `<Space>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|align|Alignment|`'start' \| 'end' \| 'center' \| 'baseline'`|`-`||
|direction|Spacing direction|`'vertical' \| 'horizontal'`|`'horizontal'`||
|size|Spacing size, support for setting horizontal and vertical spacing separately|`number \| 'mini' \| 'small' \| 'medium' \| 'large' \| [SpaceSize, SpaceSize]`|`'small'`||
|wrap|The spacing of the wrapping type, used in the scene of wrapping.|`boolean`|`-`||
|fill|fill the block|`boolean`|`-`|2.11.0|

## Type

```ts
type SpaceSize = number | 'mini' | 'small' | 'medium' | 'large';
```