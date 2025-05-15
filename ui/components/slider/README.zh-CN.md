```yaml
meta:
  type: 组件
  category: 数据输入
title: 滑动输入条 Slider
description: 滑动型输入器，展示当前值和可选范围。
```

@import ./**demo**/basic.md

@import ./**demo**/disabled.md

@import ./**demo**/step.md

@import ./**demo**/marks.md

@import ./**demo**/range.md

@import ./**demo**/input.md

@import ./**demo**/vertical.md

@import ./**demo**/tooltip.md

## API

### `<Slider>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|model-value **(v-model)**|绑定值|`number \| [number, number]`|`-`||
|default-value|默认值（非受控状态）|`number \| [number, number]`|`0`||
|step|滑动的步长|`number`|`1`||
|min|滑动范围的最小值|`number`|`0`||
|marks|设置显示的标签|`Record<number, string>`|`-`||
|max|滑动范围的最大值|`number`|`100`||
|direction|滑动输入条的方向|`Direction`|`'horizontal'`||
|disabled|是否禁用|`boolean`|`false`||
|show-ticks|是否显示刻度线|`boolean`|`false`||
|show-input|是否显示输入框|`boolean`|`false`||
|range|是否开启范围选择|`boolean`|`false`||
|format-tooltip||`func`|`-`||
|show-tooltip|是否显示tooltip|`boolean`|`true`|2.42.0|