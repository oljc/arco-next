```yaml
meta:
  type: Component
  category: Data Display
title: Table
description: It is used for data collection, display, analysis and processing, and operation and processing.
```

@import ./**demo**/basic.md

@import ./**demo**/row-selection.md

@import ./**demo**/radio.md

@import ./**demo**/expand.md

@import ./**demo**/ellipsis.md

@import ./**demo**/subtree.md

@import ./**demo**/lazy-load.md

@import ./**demo**/props.md

@import ./**demo**/sort.md

@import ./**demo**/filter.md

@import ./**demo**/scroll.md

@import ./**demo**/fixed.md

@import ./**demo**/span.md

@import ./**demo**/sticky.md

@import ./**demo**/summary.md

@import ./**demo**/resize.md

@import ./**demo**/drag-row.md

@import ./**demo**/drag-handle.md

@import ./**demo**/group.md

@import ./**demo**/fixed-group.md

@import ./**demo**/editable.md

@import ./**demo**/custom.md

@import ./**demo**/custom-dom.md

@import ./**demo**/virtual-list.md

## API

### `<Table>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|columns|Column info of the table|`TableColumnData[]`|`[]`||
|data|Table data|`TableData[]`|`[]`||
|bordered|Whether to show the border|`boolean \| TableBorder`|`true`||
|hoverable|Whether to show the hover effect|`boolean`|`true`||
|stripe|Whether to enable the stripe effect|`boolean`|`false`||
|size|The size of the table|`'mini' \| 'small' \| 'medium' \| 'large'`|`'large'`||
|table-layout-fixed|The table-layout property of the table is set to fixed. After it is set to fixed, the width of the table will not be stretched beyond 100% by the content.|`boolean`|`false`||
|loading|Whether it is loading state|`boolean\|object`|`false`||
|row-selection|Table row selector configuration|`TableRowSelection`|`-`||
|expandable|Expand row configuration of the table|`TableExpandable`|`-`||
|scroll|Scrolling attribute configuration of the table. The `2.13.0` version adds support for character values. `2.20.0` version adds support for `minWidth`, `maxHeight`.|`{   x?: number \| string;   y?: number \| string;   minWidth?: number \| string;   maxHeight?: number \| string; }`|`-`||
|pagination|Pagination properties configuration|`boolean \| PaginationProps`|`true`||
|page-position|The position of the page selector|`'tl' \| 'top' \| tr' \| 'bl' \| 'bottom' \| 'br'`|`'br'`||
|indent-size|The indentation distance of the tree table|`number`|`16`||
|row-key|Value field of table row `key`|`string`|`'key'`||
|show-header|Whether to show the header|`boolean`|`true`||
|virtual-list-props|Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)|`VirtualListProps`|`-`||
|span-method|Cell merge method (The index starts counting from the data item)|`(data: {   record: TableData;   column: TableColumnData \| TableOperationColumn;   rowIndex: number;   columnIndex: number; }) => { rowspan?: number; colspan?: number } \| void`|`-`|2.10.0|
|span-all|Whether to make the index of the span method contain all|`boolean`|`false`|2.18.0|
|components||`TableComponents`|`-`||
|load-more|Data lazy loading function, open the lazy loading function when it is passed in|`(record: TableData, done: (children?: TableData[]) => void) => void`|`-`|2.13.0|
|filter-icon-align-left|Whether the filter icon is aligned to the left|`boolean`|`false`|2.13.0|
|hide-expand-button-on-empty|Whether to hide expand button when subtree is empty|`boolean`|`false`|2.14.0|
|row-class|The class name of the table row element. The `2.34.0` version adds support for function values.|`string \| any[] \| Record<string, any> \| ((record: TableData, rowIndex: number) => any)`|`-`|2.16.0|
|draggable|Table drag and drop sorting configuration|`TableDraggable`|`-`|2.16.0|
|row-number||`boolean\|object`|`-`||
|column-resizable|Whether to allow the column width to be adjusted|`boolean`|`-`|2.16.0|
|summary|Show footer summary row|`boolean \| ((params: { columns: TableColumnData[]; data: TableData[] }) => TableData[])`|`-`|2.21.0|
|summary-text|The first column of text in the summary line|`string`|`'Summary'`|2.21.0|
|summary-span-method|Cell Merge Method for Summarizing Rows|`(data: {   record: TableData;   column: TableColumnData \| TableOperationColumn;   rowIndex: number;   columnIndex: number; }) => { rowspan?: number; colspan?: number } \| void`|`-`|2.21.0|
|selected-keys|Selected row (controlled mode) takes precedence over `rowSelection`|`(string \| number)[]`|`-`|2.25.0|
|default-selected-keys|The selected row by default (uncontrolled mode) takes precedence over `rowSelection`|`(string \| number)[]`|`-`|2.25.0|
|expanded-keys|Displayed Expanded Row, Subtree (Controlled Mode) takes precedence over `expandable`|`(string \| number)[]`|`-`|2.25.0|
|default-expanded-keys|Expand row, Subtree displayed by default (Uncontrolled mode) takes precedence over `expandable`|`(string \| number)[]`|`-`|2.25.0|
|default-expand-all-rows|Whether to expand all rows by default|`boolean`|`false`|2.25.0|
|sticky-header|Whether to open the sticky header|`boolean\|number`|`false`|2.30.0|
|scrollbar|Whether to enable virtual scroll bar|`boolean \| ScrollbarProps`|`true`|2.38.0|
|show-empty-tree|Whether to display empty subtrees|`boolean`|`false`|2.51.0|

### `<TableColumn>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|data-index|Identifies the column information, corresponding to the data in TableData|`string`|`-`||
|title|Column title|`string`|`-`||
|width|Column width|`number`|`-`||
|min-width|Minimum column width|`number`|`-`||
|align|Alignment direction|`TableColumnData['align']`|`-`||
|fixed|Fixed position|`TableColumnData['fixed']`|`-`||
|ellipsis|Whether to display as omitted|`boolean`|`false`||
|sortable|Sorting related options|`TableSortable`|`-`||
|filterable|Filter related options|`TableFilterable`|`-`||
|cell-class|Custom cell class|`ClassName`|`-`|2.36.0|
|header-cell-class|Custom cell class|`ClassName`|`-`|2.36.0|
|body-cell-class|Custom cell class|`ClassName \| ((record: TableData) => ClassName)`|`-`|2.36.0|
|summary-cell-class|Customize summary column cell class|`ClassName \| ((record: TableData) => ClassName)`|`-`|2.36.0|
|cell-style|Custom cell style|`CSSProperties`|`-`|2.11.0|
|header-cell-style|Custom cell style|`CSSProperties`|`-`|2.29.0|
|body-cell-style|Custom cell style|`CSSProperties \| ((record: TableData) => CSSProperties)`|`-`|2.29.0|
|summary-cell-style|Customize summary column cell style|`CSSProperties \| ((record: TableData) => CSSProperties)`|`-`|2.30.0|
|index|index for manually specifying option. Manual specification is no longer required after version 2.26.0|`number`|`-`|2.20.2|
|tooltip|Whether to show text hints when omitted|`boolean\|object`|`false`|2.26.0|

## Type

```ts
type Filters = Record<string, string[]>;

type Sorter = { filed: string; direction: 'ascend' | 'descend' } | Record<string, never>;
```

### TableData

|Parameter|Description|Type|Default|Version|
|---|---|---|---|---|
|key|The key of the data row|`string`|``||
|expand|Expand row content|`string \| RenderFunction`|``||
|children|Sub data|`TableData[]`|``||
|disabled|Whether to disable the row selector|`boolean`|``||
|isLeaf|Whether it is a leaf node|`boolean`|``|2.13.0|

### InternalDataItem

|Parameter|Description|Type|Default|
|---|---|---|---|
|key **(required)**||`VirtualItemKey`|``|
|index **(required)**||`number`|``|
|item **(required)**||`unknown`|``|

## FAQ

## zh-CN

### 1. 关于元素插槽的使用

table 组件提供了内部元素的自定义插槽，这些插槽不同于普通插槽，对用户传入的内容有一定限制。
因为 vue 的插槽没有提供传出 children 并在 slot 中渲染的方式，我们针对 table 中的元素插槽，做了一些特殊处理，会在用户传入的内容中，附加上原有的 children，保证子元素的正常渲染。
此时需要用户注意，在元素插槽中自定义渲染时，需要传入单一空元素使用，不能在传入的元素中添加内容（参考例 1）。
如果用户需要传入复合元素，可以自定义组件，并指定 default 插槽，然后传入 table 的元素插槽中（参考例 2）。

例 1：

```vue
<!-- Only one element -->
<template>
  <a-table>
    <template #td>
      <td @click="onClick"></td>
    </template>
  </a-table>
</template>
```

例 2：

```vue
<!-- Only one component -->
<template>
  <a-table>
    <template #td>
      <MyTd></MyTd>
    </template>
  </a-table>
</template>
```

```vue
<!-- MyTd.vue -->
<template>
  <td>
    <div>my td content</div>
    <div>
      <slot />
    </div>
  </td>
</template>
```

### 2. 关于数据中的 `row-key` 设置

表格默认会通过数据中设置的 `key` 字段来唯一定位行数据，在提供数据时请确保行数据中都设置了 `key` 字段。这个字段在开启选择器等功能时为必要字段，如果想要更换默认的字段名，可以修改 `row-key` 进行设置。

---

## en-US

The table component provides custom slots for internal elements, which are different from normal slots and have certain restrictions on what the user can pass in.
Because the slot of vue does not provide a way to send out children and render them in the slot, we have done some special processing for the element slot in the table, and will append the original children to the content passed in by the user to ensure that children Normal rendering of the element.
At this point, the user needs to pay attention that when custom rendering in the element slot, a single empty element needs to be passed in, and content cannot be added to the passed in element (refer to Example 1).
If the user needs to pass in a composite element, he can customize the component, specify the default slot, and then pass it into the element slot of the table (refer to Example 2).

example 1:

```vue
<!-- Only one element -->
<template>
  <a-table>
    <template #td>
      <td @click="onClick"></td>
    </template>
  </a-table>
</template>
```

example 2：

```vue
<!-- Only one component -->
<template>
  <a-table>
    <template #td>
      <MyTd></MyTd>
    </template>
  </a-table>
</template>
```

```vue
<!-- MyTd.vue -->
<template>
  <td>
    <div>my td content</div>
    <div>
      <slot />
    </div>
  </td>
</template>
```

### 2. About the `row-key` setting in the data

By default, the table will uniquely locate the row data through the `key` field set in the data. When providing data, please ensure that the `key` field is set in the row data. This field is a necessary field when enabling functions such as selectors. If you want to change the default field name, you can modify `row-key` to set it.

---