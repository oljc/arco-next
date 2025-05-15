```yaml
meta:
  type: Component
  category: Data Entry
title: Slider
description: Sliding input device, showing current value and selectable range.
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

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|model-value **(v-model)**|Value|`number \| [number, number]`|`-`||
|default-value|Default value (uncontrolled state)|`number \| [number, number]`|`0`||
|step|Sliding step|`number`|`1`||
|min|Minimum sliding range|`number`|`0`||
|marks|Set the displayed label|`Record<number, string>`|`-`||
|max|Maximum sliding range|`number`|`100`||
|direction|The direction of the slider|`Direction`|`'horizontal'`||
|disabled|Whether to disable|`boolean`|`false`||
|show-ticks|Whether to show ticks|`boolean`|`false`||
|show-input|Whether to show the input|`boolean`|`false`||
|range|Whether to use range selection|`boolean`|`false`||
|format-tooltip||`func`|`-`||
|show-tooltip|Whether to show tooltip|`boolean`|`true`|2.42.0|