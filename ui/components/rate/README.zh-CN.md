```yaml
meta:
  type: 组件
  category: 数据输入
title: 评分 Rate
description: 用于评分或打星的组件。
```

@import ./**demo**/basic.md

@import ./**demo**/half.md

@import ./**demo**/color.md

@import ./**demo**/readonly.md

@import ./**demo**/clear.md

@import ./**demo**/character.md

@import ./**demo**/count.md

@import ./**demo**/grading.md

## API

### `<Rate>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|count|评分的总数|`number`|`5`||
|model-value **(v-model)**|绑定值|`number`|`-`||
|default-value|默认值|`number`|`0`||
|allow-half|是否允许半选|`boolean`|`false`||
|allow-clear|是否允许清除|`boolean`|`false`||
|grading|是否开启笑脸分级|`boolean`|`false`||
|readonly|是否为只读状态|`boolean`|`false`||
|disabled|是否禁用|`boolean`|`false`||
|color|颜色|`string \| Record<string, string>`|`-`|2.18.0|