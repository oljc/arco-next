```yaml
meta:
  type: 组件
  category: 数据展示
title: 卡片 Card
description: 将信息分类后分标题、详情等区域聚合展现，一般作为简洁介绍或者信息的大盘和入口。
```

@import ./**demo**/basic.md

@import ./**demo**/hoverable.md

@import ./**demo**/bordered.md

@import ./**demo**/content.md

@import ./**demo**/meta.md

@import ./**demo**/row.md

@import ./**demo**/grid.md

@import ./**demo**/inner.md

@import ./**demo**/actions.md

## API

### `<card>` Props

| 参数名       | 描述                 | 类型                  |    默认值    |
| ------------ | -------------------- | --------------------- | :----------: |
| bordered     | 是否有边框           | `boolean`             |    `true`    |
| loading      | 是否为加载中         | `boolean`             |   `false`    |
| hoverable    | 是否可悬浮           | `boolean`             |   `false`    |
| size         | 卡片尺寸             | `'medium' \| 'small'` |  `'medium'`  |
| header-style | 自定义标题区域样式   | `CSSProperties`       | `() => ({})` |
| body-style   | 内容区域自定义样式   | `CSSProperties`       | `() => ({})` |
| title        | 卡片标题             | `string`              |     `-`      |
| extra        | 卡片右上角的操作区域 | `string`              |     `-`      |

### `<card>` Slots

| 插槽名  |         描述         | 参数 |
| ------- | :------------------: | ---- |
| actions |   卡片底部的操作组   | -    |
| cover   |       卡片封面       | -    |
| extra   | 卡片右上角的操作区域 | -    |
| title   |       卡片标题       | -    |

### `<card-meta>` Props

| 参数名      | 描述 | 类型     | 默认值 |
| ----------- | ---- | -------- | :----: |
| title       | 标题 | `string` |  `-`   |
| description | 描述 | `string` |  `-`   |

### `<card-meta>` Slots

| 插槽名      | 描述 | 参数 |
| ----------- | :--: | ---- |
| description | 描述 | -    |
| title       | 标题 | -    |
| avatar      | 头像 | -    |

### `<card-grid>` Props

| 参数名    | 描述         | 类型      | 默认值  |
| --------- | ------------ | --------- | :-----: |
| hoverable | 是否可以悬浮 | `boolean` | `false` |
