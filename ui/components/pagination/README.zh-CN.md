```yaml
meta:
  type: 组件
  category: 导航
title: 分页 Pagination
description: 采用分页控制单页内的信息数量，也可进行页面跳转。
```

@import ./**demo**/basic.md

@import ./**demo**/ellipsis.md

@import ./**demo**/page-size.md

@import ./**demo**/jumper.md

@import ./**demo**/size.md

@import ./**demo**/simple.md

@import ./**demo**/total.md

@import ./**demo**/all.md

@import ./**demo**/custom.md

## API

### `<Pagination>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|total **(必填)**|数据总数|`number`|`-`||
|current **(v-model)**|当前的页数|`number`|`-`||
|default-current|默认的页数（非受控状态）|`number`|`1`||
|page-size **(v-model)**|每页展示的数据条数|`number`|`-`||
|default-page-size|默认每页展示的数据条数（非受控状态）|`number`|`10`||
|disabled|是否禁用|`boolean`|`false`||
|hide-on-single-page|单页时是否隐藏分页|`boolean`|`false`||
|simple|是否为简单模式|`boolean`|`false`||
|show-total|是否显示数据总数|`boolean`|`false`||
|show-more|是否显示更多按钮|`boolean`|`false`||
|show-jumper|是否显示跳转|`boolean`|`false`||
|show-page-size|是否显示数据条数选择器|`boolean`|`false`||
|page-size-options|数据条数选择器的选项列表|`number[]`|`[10, 20, 30, 40, 50]`||
|page-size-props|数据条数选择器的Props|`SelectProps`|`-`||
|size|分页选择器的大小|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`||
|page-item-style|分页按钮的样式|`CSSProperties`|`-`||
|active-page-item-style|当前分页按钮的样式|`CSSProperties`|`-`||
|base-size|计算显示省略的基础个数。显示省略的个数为 `baseSize + 2 * bufferSize`|`number`|`6`||
|buffer-size|显示省略号时，当前页码左右显示的页码个数|`number`|`2`||
|auto-adjust|是否在改变数据条数时调整页码|`boolean`|`true`|2.34.0|