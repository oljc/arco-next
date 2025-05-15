```yaml
meta:
  type: Component
  category: Data Display
title: List
description: The most basic list display, which can carry text, lists, pictures, and paragraphs, and is often used in the background data display page.
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

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|data|List data, need to be used with `item` slot at the same time|`any[]`|`-`||
|size|List size|`'small' \| 'medium' \| 'large'`|`'medium'`||
|bordered|Whether to show the border|`boolean`|`true`||
|split|Whether to show the dividing line|`boolean`|`true`||
|loading|Whether it is loading state|`boolean`|`false`||
|hoverable|Whether to display the selected style|`boolean`|`false`||
|pagination-props|List pagination configuration|`PaginationProps`|`-`||
|grid-props|List grid configuration|`object`|`-`||
|max-height|Maximum height of the list|`string \| number`|`0`||
|bottom-offset|Trigger the distance threshold to reach the bottom|`number`|`0`||
|virtual-list-props|Pass virtual list properties, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)|`VirtualListProps`|`-`||
|scrollbar|Whether to enable virtual scroll bar|`boolean \| ScrollbarProps`|`true`|2.38.0|

### `<ListItem>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|action-layout|Operation group arrangement direction|`Direction`|`'horizontal'`|

### `<ListItemMeta>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|title|Title|`string`|`-`|
|description|Description|`string`|`-`|

### InternalDataItem

|Parameter|Description|Type|Default|
|---|---|---|---|
|key **(required)**||`VirtualItemKey`|``|
|index **(required)**||`number`|``|
|item **(required)**||`unknown`|``|