```yaml
meta:
  type: 组件
  category: 数据输入
title: 树选择 TreeSelect
description: 可以对树形结构数据进行选择。
```

@import ./**demo**/basic.md

@import ./**demo**/label-in-value.md

@import ./**demo**/control.md

@import ./**demo**/load-more.md

@import ./**demo**/search.md

@import ./**demo**/search-remote.md

@import ./**demo**/size.md

@import ./**demo**/dropdown-slots.md

@import ./**demo**/trigger-element.md

@import ./**demo**/multiple.md

@import ./**demo**/checkable.md

@import ./**demo**/checked-strategy.md

@import ./**demo**/popup-visible.md

@import ./**demo**/field-names.md

@import ./**demo**/virtual.md

@import ./**demo**/fallback.md

## API

### `<TreeSelect>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|disabled|是否禁用|`boolean`|`-`||
|loading|是否为加载中状态|`boolean`|`-`||
|error|是否为错误状态|`boolean`|`-`||
|size|选择框的大小|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`||
|border|是否显示边框|`boolean`|`true`||
|allow-search|是否允许搜索|`boolean \| { retainInputValue?: boolean }`|`false (single) \\| true (multiple)`||
|allow-clear|是否允许清除|`boolean`|`-`||
|placeholder|提示文案|`string`|`-`||
|max-tag-count|最多显示的标签数量，仅在多选模式有效|`number`|`-`||
|multiple|是否支持多选|`boolean`|`-`||
|default-value|默认值|`string \| number \| Array<string \| number> \| LabelValue \| LabelValue[]`|`-`||
|model-value **(v-model)**|绑定值|`string \| number \| Array<string \| number> \| LabelValue \| LabelValue[]`|`-`||
|field-names|指定节点数据中的字段名|`TreeFieldNames`|`-`||
|data|数据|`TreeNodeData[]`|`[]`||
|label-in-value|设置value格式。默认是string，设置为true时候，value格式为： { label: string, value: string }|`boolean`|`-`||
|tree-checkable|是否展示复选框|`boolean`|`-`||
|tree-check-strictly|父子节点是否关联|`boolean`|`-`||
|tree-checked-strategy|定制回显方式|`'all' \| 'parent' \| 'child'`|`'all'`||
|tree-props|可以接受所有 [Tree](/vue/component/tree) 组件的Props|`Partial<TreeProps>`|`-`||
|trigger-props|可以接受所有 [Trigger](/vue/component/trigger) 组件的Props|`Partial<TriggerProps>`|`-`||
|popup-visible **(v-model)**|弹出框是否可见|`boolean`|`-`||
|default-popup-visible|默认弹出框是否可见|`boolean`|`-`||
|dropdown-style|下拉框样式|`CSSProperties`|`-`||
|dropdown-class-name|下拉框样式 class|`string \| string[]`|`-`||
|filter-tree-node|自定义节点过滤函数|`(searchKey: string, nodeData: TreeNodeData) => boolean`|`-`||
|load-more|动态加载数据|`(nodeData: TreeNodeData) => Promise<void>`|`-`||
|disable-filter|禁用内部过滤逻辑|`boolean`|`-`||
|popup-container|弹出框的挂载容器|`string \| HTMLElement`|`-`||
|fallback-option|为 value 中找不到匹配项的 key 定义节点数据|`boolean \| ((key: number \| string) => TreeNodeData \| boolean)`|`true`|2.22.0|
|selectable|设置可选择的节点，默认全部可选|`\| boolean \| 'leaf' \| ((node: TreeNodeData, info: { isLeaf: boolean; level: number }) => boolean)`|`true`|2.27.0|
|scrollbar|是否开启虚拟滚动条|`boolean \| ScrollbarProps`|`true`|2.39.0|
|show-header-on-empty|空状态时是否显示header|`boolean`|`false`||
|show-footer-on-empty|空状态时是否显示footer|`boolean`|`false`||
|input-value **(v-model)**|输入框的值|`string`|`-`|2.55.0|
|default-input-value|输入框的默认值（非受控模式）|`string`|`''`|2.55.0|