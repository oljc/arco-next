```yaml
meta:
  type: 组件
  category: 数据展示
title: 表格 Table
description: 用于数据收集展示、分析整理、操作处理。
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

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|columns|表格的列描述信息|`TableColumnData[]`|`[]`||
|data|表格的数据|`TableData[]`|`[]`||
|bordered|是否显示边框|`boolean \| TableBorder`|`true`||
|hoverable|是否显示选中效果|`boolean`|`true`||
|stripe|是否开启斑马纹效果|`boolean`|`false`||
|size|表格的大小|`'mini' \| 'small' \| 'medium' \| 'large'`|`'large'`||
|table-layout-fixed|表格的 table-layout 属性设置为 fixed，设置为 fixed 后，表格的宽度不会被内容撑开超出 100%。|`boolean`|`false`||
|loading|是否为加载中状态|`boolean\|object`|`false`||
|row-selection|表格的行选择器配置|`TableRowSelection`|`-`||
|expandable|表格的展开行配置|`TableExpandable`|`-`||
|scroll|表格的滚动属性配置。`2.13.0` 版本增加字符型值的支持。`2.20.0` 版本增加 `minWidth`,`maxHeight` 的支持。|`{   x?: number \| string;   y?: number \| string;   minWidth?: number \| string;   maxHeight?: number \| string; }`|`-`||
|pagination|分页的属性配置|`boolean \| PaginationProps`|`true`||
|page-position|分页选择器的位置|`'tl' \| 'top' \| tr' \| 'bl' \| 'bottom' \| 'br'`|`'br'`||
|indent-size|树形表格的缩进距离|`number`|`16`||
|row-key|表格行 `key` 的取值字段|`string`|`'key'`||
|show-header|是否显示表头|`boolean`|`true`||
|virtual-list-props|传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps)|`VirtualListProps`|`-`||
|span-method|单元格合并方法（索引从数据项开始计数）|`(data: {   record: TableData;   column: TableColumnData \| TableOperationColumn;   rowIndex: number;   columnIndex: number; }) => { rowspan?: number; colspan?: number } \| void`|`-`|2.10.0|
|span-all|是否让合并方法的索引包含所有|`boolean`|`false`|2.18.0|
|components||`TableComponents`|`-`||
|load-more|数据懒加载函数，传入时开启懒加载功能|`(record: TableData, done: (children?: TableData[]) => void) => void`|`-`|2.13.0|
|filter-icon-align-left|筛选图标是否左对齐|`boolean`|`false`|2.13.0|
|hide-expand-button-on-empty|是否在子树为空时隐藏展开按钮|`boolean`|`false`|2.14.0|
|row-class|表格行元素的类名。`2.34.0` 版本增加函数值支持|`string \| any[] \| Record<string, any> \| ((record: TableData, rowIndex: number) => any)`|`-`|2.16.0|
|draggable|表格拖拽排序的配置|`TableDraggable`|`-`|2.16.0|
|row-number||`boolean\|object`|`-`||
|column-resizable|是否允许调整列宽|`boolean`|`-`|2.16.0|
|summary|显示表尾总结行|`boolean \| ((params: { columns: TableColumnData[]; data: TableData[] }) => TableData[])`|`-`|2.21.0|
|summary-text|总结行的首列文字|`string`|`'Summary'`|2.21.0|
|summary-span-method|总结行的单元格合并方法|`(data: {   record: TableData;   column: TableColumnData \| TableOperationColumn;   rowIndex: number;   columnIndex: number; }) => { rowspan?: number; colspan?: number } \| void`|`-`|2.21.0|
|selected-keys|已选择的行（受控模式）优先于 `rowSelection`|`(string \| number)[]`|`-`|2.25.0|
|default-selected-keys|默认已选择的行（非受控模式）优先于 `rowSelection`|`(string \| number)[]`|`-`|2.25.0|
|expanded-keys|显示的展开行、子树（受控模式）优先于 `expandable`|`(string \| number)[]`|`-`|2.25.0|
|default-expanded-keys|默认显示的展开行、子树（非受控模式）优先于 `expandable`|`(string \| number)[]`|`-`|2.25.0|
|default-expand-all-rows|是否默认展开所有的行|`boolean`|`false`|2.25.0|
|sticky-header|是否开启表头吸顶|`boolean\|number`|`false`|2.30.0|
|scrollbar|是否开启虚拟滚动条|`boolean \| ScrollbarProps`|`true`|2.38.0|
|show-empty-tree|是否展示空子树|`boolean`|`false`|2.51.0|

### `<TableColumn>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|data-index|列信息的标识，对应TableData中的数据|`string`|`-`||
|title|列标题|`string`|`-`||
|width|列宽度|`number`|`-`||
|min-width|最小列宽|`number`|`-`||
|align|对齐方向|`TableColumnData['align']`|`-`||
|fixed|固定位置|`TableColumnData['fixed']`|`-`||
|ellipsis|是否显示为省略|`boolean`|`false`||
|sortable|排序相关选项|`TableSortable`|`-`||
|filterable|过滤相关选项|`TableFilterable`|`-`||
|cell-class|自定义单元格类名|`ClassName`|`-`|2.36.0|
|header-cell-class|自定义表头单元格类名|`ClassName`|`-`|2.36.0|
|body-cell-class|自定义内容单元格类名|`ClassName \| ((record: TableData) => ClassName)`|`-`|2.36.0|
|summary-cell-class|自定义总结栏单元格类名|`ClassName \| ((record: TableData) => ClassName)`|`-`|2.36.0|
|cell-style|自定义单元格样式|`CSSProperties`|`-`|2.11.0|
|header-cell-style|自定义表头单元格样式|`CSSProperties`|`-`|2.29.0|
|body-cell-style|自定义内容单元格样式|`CSSProperties \| ((record: TableData) => CSSProperties)`|`-`|2.29.0|
|summary-cell-style|自定义总结栏单元格样式|`CSSProperties \| ((record: TableData) => CSSProperties)`|`-`|2.30.0|
|index|用于手动指定选项的 index。2.26.0 版本后不再需要手动指定|`number`|`-`|2.20.2|
|tooltip|在省略时是否显示文字提示|`boolean\|object`|`false`|2.26.0|

## Type

```ts
type Filters = Record<string, string[]>;

type Sorter = { filed: string; direction: 'ascend' | 'descend' } | Record<string, never>;
```

### TableData

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|key|数据行的key|`string`|``||
|expand|扩展行内容|`string \| RenderFunction`|``||
|children|子数据|`TableData[]`|``||
|disabled|是否禁用行选择器|`boolean`|``||
|isLeaf|是否是叶子节点|`boolean`|``|2.13.0|

### InternalDataItem

|参数名|描述|类型|默认值|
|---|---|---|---|
|key **(必填)**||`VirtualItemKey`|``|
|index **(必填)**||`number`|``|
|item **(必填)**||`unknown`|``|

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