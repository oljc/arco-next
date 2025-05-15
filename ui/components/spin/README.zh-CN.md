```yaml
meta:
  type: 组件
  category: 反馈
title: 加载中 Spin
description: 用于页面和区块的加载中状态 - 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
```

@import ./**demo**/basic.md

@import ./**demo**/size.md

@import ./**demo**/dot.md

@import ./**demo**/container.md

@import ./**demo**/tip.md

@import ./**demo**/icon.md

## API

### `<Spin>` Props

|参数名|描述|类型|默认值|
|---|---|---|---|
|size|尺寸|`number`|`-`|
|loading|是否为加载中状态（仅在容器模式下生效）|`boolean`|`-`|
|dot|是否使用点类型的动画|`boolean`|`-`|
|tip|提示内容|`string`|`-`|
|hide-icon|是否隐藏图标|`boolean`|`false`|