```yaml
meta:
  type: 组件
  category: 数据展示
title: 时间轴 Timeline
description: 按照时间顺序或倒序规则的展示信息内容。
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

|参数名|描述|类型|默认值|
|---|---|---|---|
|reverse|是否倒序|`boolean`|`-`|
|direction|时间轴方向|`'horizontal' \| 'vertical'`|`'vertical'`|
|mode|时间轴的展示类型：时间轴在左侧，时间轴在右侧, 交替出现。|`'left' \| 'right' \| 'top' \| 'bottom' \| 'alternate'`|`'left'`|
|pending|是否展示幽灵节点，设置为 true 时候只展示幽灵节点。传入ReactNode时，会作为节点内容展示。|`boolean\|string`|`-`|
|label-position|设置标签文本的位置|`'relative' \| 'same'`|`'same'`|

### `<TimelineItem>` Props

|参数名|描述|类型|默认值|
|---|---|---|---|
|dot-color|节点颜色|`string`|`-`|
|dot-type|节点类型：空心圆/实心圆|`'hollow' \| 'solid'`|`'solid'`|
|line-type|时间轴类型：实线/虚线/点状线|`'solid' \| 'dashed' \| 'dotted'`|`'solid'`|
|line-color|时间轴颜色|`string`|`-`|
|label|标签文本|`string`|`-`|
|position|Item 位置|`PositionType`|`-`|