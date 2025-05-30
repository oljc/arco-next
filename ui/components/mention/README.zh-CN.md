```yaml
meta:
  type: 组件
  category: 数据输入
title: 提及 Mention
description: 用于在输入中提及某人或某事，常用于发布、聊天或评论功能。
```

@import ./**demo**/basic.md

@import ./**demo**/prefix.md

## API

### `<Mention>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|model-value **(v-model)**|绑定值|`string`|`-`||
|default-value|默认值（非受控状态）|`string`|`''`||
|data|用于自动补全的数据|`(string \| number \| SelectOptionData \| SelectOptionGroup)[]`|`[]`||
|prefix|触发自动补全的关键字|`string \| string[]`|`'@'`||
|split|选中项的前后分隔符|`string`|`' '`||
|type|输入框或文本域|`'input' \| 'textarea'`|`'input'`||
|disabled|是否禁用|`boolean`|`false`||
|allow-clear|是否允许清空输入框|`boolean`|`false`|2.23.0|