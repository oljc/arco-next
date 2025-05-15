```yaml
meta:
  type: Component
  category: Data Display
title: Tree
description: For content with many levels, such as folders, catalogs, and organizational structures, the tree can clearly show their hierarchical relationship, and has interactive functions such as expanding, collapsing, and selecting.
```

@import ./**demo**/basic.md

@import ./**demo**/block-node.md

@import ./**demo**/multiple.md

@import ./**demo**/checkable.md

@import ./**demo**/control.md

@import ./**demo**/load-more.md

@import ./**demo**/draggable.md

@import ./**demo**/checked-strategy.md

@import ./**demo**/show-line.md

@import ./**demo**/size.md

@import ./**demo**/node-icon.md

@import ./**demo**/render-extra.md

@import ./**demo**/icons.md

@import ./**demo**/virtual.md

@import ./**demo**/search.md

@import ./**demo**/field-names.md

## API

### `<Tree>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|size|Size|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`||
|block-node|Whether the node occupies a row|`boolean`|`-`||
|default-expand-all|Whether to expand the parent node by default|`boolean`|`true`||
|multiple|Whether to support multiple selection|`boolean`|`-`||
|checkable|Whether to add a checkbox before the node, function format is supported since `2.27.0`|`\| boolean \| ((     node: TreeNodeData,     info: {       level: number;       isLeaf: boolean;     },   ) => boolean)`|`false`||
|selectable|Whether to support selection, function format is supported since `2.27.0`|`\| boolean \| ((     node: TreeNodeData,     info: {       level: number;       isLeaf: boolean;     },   ) => boolean)`|`true`||
|check-strictly|Whether to cancel the parent-child node association|`boolean`|`-`||
|checked-strategy|Customized backfill method <br/> all: return all selected nodes <br/> parent: return only parent node when both parent and child nodes are selected <br/> child: return only child nodes|`'all' \| 'parent' \| 'child'`|`'all'`||
|default-selected-keys|Tree node selected by default|`Array<string \| number>`|`-`||
|selected-keys **(v-model)**|Selected tree node|`Array<string \| number>`|`-`||
|default-checked-keys|Tree node with checkbox selected by default|`Array<string \| number>`|`-`||
|checked-keys **(v-model)**|Tree node with check box selected|`Array<string \| number>`|`-`||
|default-expanded-keys|Nodes expanded by default|`Array<string \| number>`|`-`||
|expanded-keys **(v-model)**|Expanded node|`Array<string \| number>`|`-`||
|data|Pass in `data` to generate the corresponding tree structure|`TreeNodeData[]`|`[]`||
|field-names|Specify the field name in the node data|`TreeFieldNames`|`-`||
|show-line|Whether to display the connection line|`boolean`|`-`||
|load-more|A callback for loading data asynchronously, returning a `Promise`|`(node: TreeNodeData) => Promise<void>`|`-`||
|draggable|Whether it can be dragged|`boolean`|`-`||
|allow-drop|Whether to allow release on a node when dragging|`(options: { dropNode: TreeNodeData; dropPosition: -1 \| 0 \| 1 }) => boolean`|`-`||
|filter-tree-node||`FilterTreeNode`|`-`||
|search-value||`string`|`''`||
|virtual-list-props|Pass virtual list properties, pass in this parameter to turn on virtual scrolling, [VirtualListProps](#VirtualListProps)|`VirtualListProps`|`-`||
|default-expand-selected|Whether to expand the parent node of the selected node by default|`boolean`|`-`|2.9.0|
|default-expand-checked|Whether to expand the parent node of the checked node by default|`boolean`|`-`|2.9.0|
|auto-expand-parent|Whether to automatically expand the parent node of the expanded node|`boolean`|`true`|2.9.0|
|half-checked-keys **(v-model)**|The keys of half checked. Only valid when checkable and checkStrictly|`Array<string \| number>`|`-`|2.19.0|
|only-check-leaf|When enabled, checkedKeys is only for checked leaf nodes, and the status of the parent node is determined by the child node.(Only valid when checkable and checkStrictly is false)|`boolean`|`false`|2.21.0|
|animation|Whether to enable expand transition animation|`boolean`|`true`|2.21.0|
|action-on-node-click|The action triggered when the node is clicked|`'expand'`|`-`|2.27.0|
|disable-select-action-only||`boolean`|`false`||

### TreeNodeData

|Parameter|Description|Type|Default|
|---|---|---|---|
|key|Unique key|`string \| number`|``|
|title|The title of the node|`string`|``|
|selectable|Whether to allow selection|`boolean`|``|
|disabled|Whether to disable the node|`boolean`|``|
|disableCheckbox|Whether to disable the checkbox|`boolean`|``|
|checkable|Whether to show checkbox|`boolean`|``|
|draggable|Whether it can be dragged|`boolean`|``|
|isLeaf|Whether it is a leaf node. Effective when loading dynamically|`boolean`|``|
|icon|Node icon|`() => VNode`|``|
|switcherIcon|Custom switcher icon, priority is greater than tree|`() => VNode`|``|
|loadingIcon|Customize loading icon, priority is greater than tree|`() => VNode`|``|
|dragIcon|Custom drag icon, priority is greater than tree|`() => VNode`|``|
|children|Child node|`TreeNodeData[]`|``|

### InternalDataItem

|Parameter|Description|Type|Default|
|---|---|---|---|
|key **(required)**||`VirtualItemKey`|``|
|index **(required)**||`number`|``|
|item **(required)**||`unknown`|``|