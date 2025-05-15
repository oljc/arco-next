```yaml
meta:
  type: 组件
  category: 数据输入
title: 数字输入框 InputNumber
description: 仅允许输入数字格式的输入框。
```

@import ./**demo**/basic.md

@import ./**demo**/mode.md

@import ./**demo**/size.md

@import ./**demo**/precision.md

@import ./**demo**/prefix.md

@import ./**demo**/step-icon.md

@import ./**demo**/format.md

@import ./**demo**/model.md

## API

### `<InputNumber>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|model-value **(v-model)**|绑定值|`number`|`-`||
|default-value|默认值（非受控模式）|`number`|`-`||
|mode|模式（`embed`：按钮内嵌模式，`button`：左右按钮模式）|`'embed' \| 'button'`|`'embed'`||
|precision|数字精度|`number`|`-`||
|step|数字变化步长|`number`|`1`||
|disabled|是否禁用|`boolean`|`false`||
|error|是否为错误状态|`boolean`|`false`||
|max|最大值|`number`|`Infinity`||
|min|最小值|`number`|`-Infinity`||
|formatter|定义输入框展示值|`func`|`-`||
|parser|从 `formatter` 转换为数字，和 `formatter` 搭配使用|`func`|`-`||
|placeholder|输入框提示文字|`string`|`-`||
|hide-button|是否隐藏按钮|`boolean`|`false`||
|size|输入框大小|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`||
|allow-clear|是否允许清空输入框|`boolean`|`false`||
|model-event|触发 `v-model` 的事件|`'change' \| 'input'`|`'change'`||
|read-only|只读|`boolean`|`false`|2.33.1|
|input-attrs|内部 input 元素的属性|`object`|`-`|2.52.0|