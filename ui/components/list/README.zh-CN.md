```yaml
meta:
  type: 组件
  category: 数据展示
title: 列表 List
description: 最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。
```

@import ./**demo**/basic.md

@import ./**demo**/size.md

@import ./**demo**/meta.md

@import ./**demo**/actions.md

@import ./**demo**/actions-layout.md

@import ./**demo**/grid.md

@import ./**demo**/responsive-grid.md

@import ./**demo**/scroll.md

@import ./**demo**/virtual-list.md

## API

### `<List>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|data|列表数据，需要和 `item` 插槽同时使用|`any[]`|`-`||
|size|列表大小|`'small' \| 'medium' \| 'large'`|`'medium'`||
|bordered|是否显示边框|`boolean`|`true`||
|split|是否显示分割线|`boolean`|`true`||
|loading|是否为加载中状态|`boolean`|`false`||
|hoverable|是否显示选中样式|`boolean`|`false`||
|pagination-props|列表分页配置|`PaginationProps`|`-`||
|grid-props|列表栅格配置|`object`|`-`||
|max-height|列表的最大高度|`string \| number`|`0`||
|bottom-offset|触发到达底部的距离阈值|`number`|`0`||
|virtual-list-props|传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps)|`VirtualListProps`|`-`||
|scrollbar|是否开启虚拟滚动条|`boolean \| ScrollbarProps`|`true`|2.38.0|

### `<ListItem>` Props

|参数名|描述|类型|默认值|
|---|---|---|---|
|action-layout|操作组排列方向|`Direction`|`'horizontal'`|

### `<ListItemMeta>` Props

|参数名|描述|类型|默认值|
|---|---|---|---|
|title|标题|`string`|`-`|
|description|描述内容|`string`|`-`|

### InternalDataItem

|参数名|描述|类型|默认值|
|---|---|---|---|
|key **(必填)**||`VirtualItemKey`|``|
|index **(必填)**||`number`|``|
|item **(必填)**||`unknown`|``|