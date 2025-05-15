```yaml
meta:
  type: 组件
  category: 数据展示
title: 树 Tree
description: 对于文件夹、分类目录、组织架构等层级较多的内容，树可以清楚显示他们的层级关系，并具有展开、收起、选择等交互功能。
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

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|size|尺寸|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`||
|block-node|节点是否占据一行|`boolean`|`-`||
|default-expand-all|是否默认展开父节点|`boolean`|`true`||
|multiple|是否支持多选|`boolean`|`-`||
|checkable|是否在节点前添加复选框，从 `2.27.0` 开始支持函数格式|`\| boolean \| ((     node: TreeNodeData,     info: {       level: number;       isLeaf: boolean;     },   ) => boolean)`|`false`||
|selectable|是否支持选择，从 `2.27.0` 开始支持函数格式|`\| boolean \| ((     node: TreeNodeData,     info: {       level: number;       isLeaf: boolean;     },   ) => boolean)`|`true`||
|check-strictly|是否取消父子节点关联|`boolean`|`-`||
|checked-strategy|定制回填方式 <br/> all: 返回所有选中的节点  <br/> parent: 父子节点都选中时只返回父节点 <br/> child: 只返回子节点|`'all' \| 'parent' \| 'child'`|`'all'`||
|default-selected-keys|默认选中的树节点|`Array<string \| number>`|`-`||
|selected-keys **(v-model)**|选中的树节点|`Array<string \| number>`|`-`||
|default-checked-keys|默认选中复选框的树节点|`Array<string \| number>`|`-`||
|checked-keys **(v-model)**|选中复选框的树节点|`Array<string \| number>`|`-`||
|default-expanded-keys|默认展开的节点|`Array<string \| number>`|`-`||
|expanded-keys **(v-model)**|展开的节点|`Array<string \| number>`|`-`||
|data|传入`data`,生成对应的树结构|`TreeNodeData[]`|`[]`||
|field-names|指定节点数据中的字段名|`TreeFieldNames`|`-`||
|show-line|是否展示连接线|`boolean`|`-`||
|load-more|异步加载数据的回调，返回一个 `Promise`|`(node: TreeNodeData) => Promise<void>`|`-`||
|draggable|是否可以拖拽|`boolean`|`-`||
|allow-drop|拖拽时是否允许在某节点上释放|`(options: { dropNode: TreeNodeData; dropPosition: -1 \| 0 \| 1 }) => boolean`|`-`||
|filter-tree-node||`FilterTreeNode`|`-`||
|search-value||`string`|`''`||
|virtual-list-props|传递虚拟列表属性，传入此参数以开启虚拟滚动，[VirtualListProps](#VirtualListProps)|`VirtualListProps`|`-`||
|default-expand-selected|是否默认展开已选中节点的父节点|`boolean`|`-`|2.9.0|
|default-expand-checked|是否默认展开已选中复选框节点的父节点|`boolean`|`-`|2.9.0|
|auto-expand-parent|是否自动展开已展开节点的父节点|`boolean`|`true`|2.9.0|
|half-checked-keys **(v-model)**|半选状态的节点.仅在 checkable 且 checkStrictly 时生效|`Array<string \| number>`|`-`|2.19.0|
|only-check-leaf|开启后 checkedKeys 只处理叶子节点，父节点状态由子节点决定（仅在 checkable 且 checkStrictly 为 false 时生效）|`boolean`|`false`|2.21.0|
|animation|是否开启展开时的过渡动效|`boolean`|`true`|2.21.0|
|action-on-node-click|点击节点的时候触发的动作|`'expand'`|`-`|2.27.0|
|disable-select-action-only||`boolean`|`false`||

### TreeNodeData

|参数名|描述|类型|默认值|
|---|---|---|---|
|key|唯一标示|`string \| number`|``|
|title|该节点显示的标题|`string`|``|
|selectable|是否允许选中|`boolean`|``|
|disabled|是否禁用节点|`boolean`|``|
|disableCheckbox|是否禁用复选框|`boolean`|``|
|checkable|是否显示多选框|`boolean`|``|
|draggable|是否可以拖拽|`boolean`|``|
|isLeaf|是否是叶子节点。动态加载时有效|`boolean`|``|
|icon|节点的图标|`() => VNode`|``|
|switcherIcon|定制 switcher 图标，优先级大于 tree|`() => VNode`|``|
|loadingIcon|定制 loading 图标，优先级大于 tree|`() => VNode`|``|
|dragIcon|定制 drag 图标，优先级大于 tree|`() => VNode`|``|
|children|子节点|`TreeNodeData[]`|``|

### InternalDataItem

|参数名|描述|类型|默认值|
|---|---|---|---|
|key **(必填)**||`VirtualItemKey`|``|
|index **(必填)**||`number`|``|
|item **(必填)**||`unknown`|``|