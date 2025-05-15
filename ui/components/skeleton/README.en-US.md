```yaml
meta:
  type: Component
  category: Feedback
title: Skeleton
description: Use gray to place the data being loaded.
```

@import ./**demo**/basic.md

@import ./**demo**/type.md

@import ./**demo**/animation.md

## API

### `<Skeleton>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|loading|Whether to display the skeleton screen (loading state)|`boolean`|`true`|
|animation|Whether to enable skeleton screen animation|`boolean`|`false`|

### `<SkeletonLine>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|rows|Number of rows displayed|`number`|`1`|
|widths|The width of the line skeleton|`Array<number \| string>`|`[]`|
|line-height|Line height of the line skeleton|`number`|`20`|
|line-spacing|Line spacing of line skeleton|`number`|`15`|

### `<SkeletonShape>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|shape|The shape of the shape skeleton|`'square' \| 'circle'`|`'square'`|
|size|The size of the shape skeleton|`'small' \| 'medium' \| 'large'`|`'medium'`|