```yaml
meta:
  type: 组件
  category: 数据输入
title: 开关 Switch
description: 互斥性的操作控件，用户可打开或关闭某个功能。
```

@import ./**demo**/basic.md

@import ./**demo**/type.md

@import ./**demo**/size.md

@import ./**demo**/disabled.md

@import ./**demo**/color.md

@import ./**demo**/value.md

@import ./**demo**/change-intercept.md

@import ./**demo**/loading.md

@import ./**demo**/text.md

@import ./**demo**/icon.md

## API

### `<Switch>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|model-value **(v-model)**|绑定值|`string\|number\|boolean`|`-`||
|default-checked|默认选中状态（非受控状态）|`boolean`|`false`||
|disabled|是否禁用|`boolean`|`false`||
|loading|是否为加载中状态|`boolean`|`false`||
|type|开关的类型|`'circle' \| 'round' \| 'line'`|`'circle'`||
|size|开关的大小|`'small' \| 'medium'`|`'medium'`||
|checked-value|选中时的值|`string\|number\|boolean`|`true`|2.12.0|
|unchecked-value|未选中时的值|`string\|number\|boolean`|`false`|2.12.0|
|checked-color|选中时的开关颜色|`string`|`-`|2.12.0|
|unchecked-color|未选中时的开关颜色|`string`|`-`|2.12.0|
|before-change|switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换。|`(newValue: string \| number \| boolean) => Promise<boolean \| void> \| boolean \| void`|`-`|2.37.0|
|checked-text|打开状态时的文案（`type='line'`和`size='small'`时不生效）|`string`|`-`|2.45.0|
|unchecked-text|关闭状态时的文案（`type='line'`和`size='small'`时不生效）|`string`|`-`|2.45.0|