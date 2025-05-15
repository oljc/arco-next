```yaml
meta:
  type: Component
  category: Data Display
title: Timeline
description: Display information content in chronological or reverse order.
```

@import ./**demo**/basic.md

@import ./**demo**/icon.md

@import ./**demo**/dot.md

@import ./**demo**/type.md

@import ./**demo**/pending.md

@import ./**demo**/mode.md

@import ./**demo**/vertical.md

@import ./**demo**/direction.md

@import ./**demo**/label.md

@import ./**demo**/custom.md

## API

### `<Timeline>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|reverse|Whether reverse order|`boolean`|`-`|
|direction|Timeline direction|`'horizontal' \| 'vertical'`|`'vertical'`|
|mode|The display mode of Timeline|`'left' \| 'right' \| 'top' \| 'bottom' \| 'alternate'`|`'left'`|
|pending|Whether to display ghost nodes. When set to true, only ghost nodes are displayed. When passed to ReactNode, it will be displayed as node content|`boolean\|string`|`-`|
|label-position|Position of label text|`'relative' \| 'same'`|`'same'`|

### `<TimelineItem>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|dot-color|Dot color|`string`|`-`|
|dot-type|Dot type|`'hollow' \| 'solid'`|`'solid'`|
|line-type|Line type|`'solid' \| 'dashed' \| 'dotted'`|`'solid'`|
|line-color|Line Color|`string`|`-`|
|label|Label text|`string`|`-`|
|position|Item position|`PositionType`|`-`|