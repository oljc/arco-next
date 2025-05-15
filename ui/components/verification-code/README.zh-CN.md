```yaml
meta:
  type: 组件
  category: 数据输入
title: 验证码输入 VerificationCode
description: 验证码输入组件
```

@import ./**demo**/basic.md
@import ./**demo**/status.md
@import ./**demo**/masked.md
@import ./**demo**/separator.md
@import ./**demo**/form.md
@import ./**demo**/formatter.md

## API

### `<VerificationCode>` Props

|参数名|描述|类型|默认值|
|---|---|---|---|
|model-value **(v-model)**|绑定值|`string`|`-`|
|default-value|默认值（非受控状态）|`string`|`''`|
|length|验证码的长度，根据长度渲染对应个数的输入框|`number`|`6`|
|size|输入框大小|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`|
|disabled|是否禁用|`boolean`|`-`|
|masked|是否密码模式|`boolean`|`-`|
|readonly|只读|`boolean`|`-`|
|error|是否为错误状态|`boolean`|`false`|
|separator|分隔符。可在不同索引的输入框后自定义渲染分隔符|`(index: number, character: string) => VNode`|`-`|
|formatter|格式化函数，当用户输入值改变时触发|`(inputValue: string, index: number, value: string) => string \| boolean`|`-`|