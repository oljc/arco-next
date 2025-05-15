```yaml
meta:
  type: Component
  category: Data Entry
title: TreeSelect
description: The tree structure data can be selected.
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

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|disabled|Whether to disable|`boolean`|`-`||
|loading|Whether it is loading state|`boolean`|`-`||
|error|Whether it is an error state|`boolean`|`-`||
|size|The size of the selection box.|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`||
|border|Whether to show the border|`boolean`|`true`||
|allow-search|Whether to allow searching|`boolean \| { retainInputValue?: boolean }`|`false (single) \\| true (multiple)`||
|allow-clear|Whether to allow clear|`boolean`|`-`||
|placeholder|Prompt copy|`string`|`-`||
|max-tag-count|The maximum number of labels displayed, only valid in multi-select mode|`number`|`-`||
|multiple|Whether to support multiple selection|`boolean`|`-`||
|default-value|Default value|`string \| number \| Array<string \| number> \| LabelValue \| LabelValue[]`|`-`||
|model-value **(v-model)**|Value|`string \| number \| Array<string \| number> \| LabelValue \| LabelValue[]`|`-`||
|field-names|Specify the field name in the node data|`TreeFieldNames`|`-`||
|data|Data|`TreeNodeData[]`|`[]`||
|label-in-value|Set the value format. The default is string, when set to true, the value format is: {label: string, value: string}|`boolean`|`-`||
|tree-checkable|Whether to show checkbox|`boolean`|`-`||
|tree-check-strictly|Whether the parent and child nodes are related|`boolean`|`-`||
|tree-checked-strategy|Customized echo method|`'all' \| 'parent' \| 'child'`|`'all'`||
|tree-props|Can accept Props of all [Tree](/vue/component/tree) components|`Partial<TreeProps>`|`-`||
|trigger-props|Can accept Props of all [Trigger](/vue/component/trigger) components|`Partial<TriggerProps>`|`-`||
|popup-visible **(v-model)**|Whether the pop-up box is visible|`boolean`|`-`||
|default-popup-visible|Whether the default pop-up box is visible|`boolean`|`-`||
|dropdown-style|Drop-down box style|`CSSProperties`|`-`||
|dropdown-class-name|Drop-down box style class|`string \| string[]`|`-`||
|filter-tree-node|Custom node filter function|`(searchKey: string, nodeData: TreeNodeData) => boolean`|`-`||
|load-more|Load data dynamically|`(nodeData: TreeNodeData) => Promise<void>`|`-`||
|disable-filter|Disable internal filtering logic|`boolean`|`-`||
|popup-container|Mount container for pop-up box|`string \| HTMLElement`|`-`||
|fallback-option|Customize node data for keys that do not match options|`boolean \| ((key: number \| string) => TreeNodeData \| boolean)`|`true`|2.22.0|
|selectable|Set the nodes that can be selected, all can be selected by default|`\| boolean \| 'leaf' \| ((node: TreeNodeData, info: { isLeaf: boolean; level: number }) => boolean)`|`true`|2.27.0|
|scrollbar|Whether to enable virtual scroll bar|`boolean \| ScrollbarProps`|`true`|2.39.0|
|show-header-on-empty|Whether to display the header in the empty state|`boolean`|`false`||
|show-footer-on-empty|Whether to display the footer in the empty state|`boolean`|`false`||
|input-value **(v-model)**|The value of the input|`string`|`-`|2.55.0|
|default-input-value|The default value of the input (uncontrolled mode)|`string`|`''`|2.55.0|