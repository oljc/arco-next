```yaml
meta:
  type: 组件
  category: 数据输入
title: 数据穿梭框 Transfer
description: 两栏布局的多选组件，将元素从一栏即时移到另一栏。
```

@import ./**demo**/basic.md

@import ./**demo**/search.md

@import ./**demo**/one-way.md

@import ./**demo**/custom.md

@import ./**demo**/simple.md

@import ./**demo**/tree.md

@import ./**demo**/custom-header.md

## API

### `<Transfer>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|data|穿梭框的数据|`TransferItem[]`|`[]`||
|model-value **(v-model)**|目标选择框中的值|`string[]`|`-`||
|default-value|目标选择框中默认的值（非受控状态）|`string[]`|`[]`||
|selected **(v-model)**|选中的选项值|`string[]`|`-`||
|default-selected|默认选中的选项值（非受控状态）|`string[]`|`[]`||
|disabled|是否禁用|`boolean`|`false`||
|simple|是否开启简单模式（点击选项即移动）|`boolean`|`false`||
|one-way|是否开启单向模式（仅可移动到目标选择框）|`boolean`|`false`||
|show-search|是否显示搜索框|`boolean`|`false`||
|show-select-all|是否展示全选勾选框|`boolean`|`true`|2.39.0|
|title|源选择框和目标选择框的标题|`string[]`|`['Source', 'Target']`||
|source-input-search-props|源选择框的搜索框配置|`object`|`-`|2.51.1|
|target-input-search-props|目标选择框的搜索框配置|`object`|`-`|2.51.1|

### TransferItem

|参数名|描述|类型|默认值|
|---|---|---|---|
|value **(必填)**|选项的值|`string`|``|
|label **(必填)**|选项的标签|`string`|``|
|disabled **(必填)**|是否禁用|`boolean`|``|