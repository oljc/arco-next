```yaml
meta:
  type: 组件
  category: 数据展示
title: 标签页 Tabs
description: 将内容组织同一视图中，一次可查看一个视图内容，查看其他内容可切换选项卡查看。
```

@import ./**demo**/basic.md

@import ./**demo**/icon.md

@import ./**demo**/position.md

@import ./**demo**/type.md

@import ./**demo**/lazy.md

@import ./**demo**/extra.md

@import ./**demo**/editable.md

@import ./**demo**/trigger.md

@import ./**demo**/scroll.md

## API

### `<Tabs>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|active-key **(v-model)**|当前选中的标签的 `key`|`string\|number`|`-`||
|default-active-key|默认选中的标签的`key`（非受控状态，为空时选中第一个标签页）|`string\|number`|`-`||
|position|选项卡的位置|`'left' \| 'right' \| 'top' \| 'bottom'`|`'top'`||
|size|选项卡的大小|`'mini' \| 'small' \| 'medium' \| 'large'`|`-`||
|type|选项卡的类型|`'line' \| 'card' \| 'card-gutter' \| 'text' \| 'rounded' \| 'capsule'`|`'line'`||
|direction|选项卡的方向|`'horizontal' \| 'vertical'`|`'horizontal'`||
|editable|是否开启可编辑模式|`boolean`|`false`||
|show-add-button|是否显示增加按钮（仅在可编辑模式可用）|`boolean`|`false`||
|destroy-on-hide|是否在不显示标签时销毁内容|`boolean`|`false`|2.27.0|
|lazy-load|是否在首次展示标签时挂载内容|`boolean`|`false`||
|justify|高度撑满容器，只在水平模式下生效。|`boolean`|`false`||
|animation|是否开启选项内容过渡动画|`boolean`|`false`||
|header-padding|选项卡头部是否存在水平边距。仅对 `type` 等于 `line`、`text` 类型的选项卡生效|`boolean`|`true`|2.10.0|
|auto-switch|创建标签后是否切换到新标签（最后一个）|`boolean`|`false`|2.18.0|
|hide-content|是否隐藏内容|`boolean`|`false`|2.25.0|
|trigger|触发方式|`'hover' \| 'click'`|`'click'`|2.34.0|
|scroll-position|被选中 tab 的滚动位置，默认 auto 即会将 activeTab 滚动到可见区域，但不会特意做位置调整|`'start' \| 'end' \| 'center' \| 'auto' \| number`|`'auto'`||

### `<TabPane>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|title|选项卡的标题|`string`|`-`||
|disabled|是否禁用|`boolean`|`false`||
|closable|是否允许关闭此选项卡（仅在可编辑模式生效）|`boolean`|`true`||
|destroy-on-hide|是否在不显示标签时销毁内容|`boolean`|`false`|2.27.0|