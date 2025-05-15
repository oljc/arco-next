```yaml
meta:
  type: 组件
  category: 数据展示
title: 标签 Tag
description: 用于信息的选择、筛选、分类。用户通过标签进行信息反馈和交互操作。
```

@import ./**demo**/basic.md

@import ./**demo**/closeable.md

@import ./**demo**/dynamically.md

@import ./**demo**/checkable.md

@import ./**demo**/color.md

@import ./**demo**/size.md

@import ./**demo**/loading.md

@import ./**demo**/icon.md

@import ./**demo**/bordered.md

## API

### `<Tag>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|color|标签的颜色|`'red' \| 'orangered' \| 'orange' \| 'gold' \| 'lime' \| 'green' \| 'cyan' \| 'blue' \| 'arcoblue' \| 'purple' \| 'pinkpurple' \| 'magenta' \| 'gray'`|`-`||
|size|标签的大小|`'small' \| 'medium' \| 'large'`|`'medium'`||
|bordered|是否显示边框|`boolean`|`false`|2.33.0|
|visible **(v-model)**|标签是否可见|`boolean`|`-`||
|default-visible|标签默认是否可见|`boolean`|`true`||
|loading|标签是否为加载中状态|`boolean`|`false`||
|closable|标签是否可关闭|`boolean`|`false`||
|checkable|标签是否可选中|`boolean`|`false`||
|checked **(v-model)**|标签是否选中（标签可选中时可用）|`boolean`|`-`||
|default-checked|标签默认选中状态（标签可选中时可用）|`boolean`|`true`||
|nowrap|标签内容不换行|`boolean`|`false`|2.56.1|