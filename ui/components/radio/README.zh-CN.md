```yaml
meta:
  type: 组件
  category: 数据输入
title: 单选框 Radio
description: 在一组相关且互斥数据中，用户仅能选择一个选项。
```

@import ./**demo**/basic.md

@import ./**demo**/control.md

@import ./**demo**/group.md

@import ./**demo**/options.md

@import ./**demo**/direction.md

@import ./**demo**/button.md

@import ./**demo**/size.md

@import ./**demo**/layout.md

@import ./**demo**/custom.md

## API

### `<Radio>` Props

|参数名|描述|类型|默认值|
|---|---|---|---|
|model-value **(v-model)**|绑定值|`string \| number \| boolean`|`-`|
|default-checked|默认是否选中（非受控状态）|`boolean`|`false`|
|value|选项的 `value`|`string \| number \| boolean`|`true`|
|type|单选的类型|`'radio' \| 'button'`|`'radio'`|
|disabled|是否禁用|`boolean`|`false`|
|uninject-group-context||`boolean`|`false`|

### `<RadioGroup>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|model-value **(v-model)**|绑定值|`string \| number \| boolean`|`-`||
|default-value|默认值（非受控状态）|`string \| number \| boolean`|`''`||
|type|单选框组的类型|`'radio' \| 'button'`|`'radio'`||
|size|单选框组的尺寸|`'mini' \| 'small' \| 'medium' \| 'large'`|`-`||
|options|选项|`Array<string \| number \| RadioOption>`|`-`|2.27.0|
|direction|单选框组的方向|`'horizontal' \| 'vertical'`|`'horizontal'`||
|disabled|是否禁用|`boolean`|`false`||

### RadioOption

|参数名|描述|类型|默认值|
|---|---|---|---|
|label|文案|`RenderContent`|``|
|value **(必填)**|选项的 `value`|`string \| number`|``|
|disabled|是否禁用|`boolean`|``|