```yaml
meta:
  type: 组件
  category: 导航
title: 菜单 Menu
description: 收纳、排列并展示一系列选项的列表。
```

@import ./**demo**/horizontal.md

@import ./**demo**/dark-horizontal.md

@import ./**demo**/collapse-control.md

@import ./**demo**/breakpoint.md

@import ./**demo**/sub-menu.md

@import ./**demo**/size.md

@import ./**demo**/pop.md

@import ./**demo**/pop-button.md

## API

### `<Menu>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|style||`StyleValue`|`-`||
|theme|菜单的主题|`'light' \| 'dark'`|`'light'`||
|mode|菜单的模式|`'vertical' \| 'horizontal' \| 'pop' \| 'popButton'`|`'vertical'`||
|level-indent|层级之间的缩进量|`number`|`-`||
|auto-open|默认展开所有多级菜单|`boolean`|`-`||
|collapsed **(v-model)**|是否折叠菜单|`boolean`|`-`||
|default-collapsed|默认是否折叠菜单|`boolean`|`-`||
|collapsed-width|折叠菜单宽度|`number`|`-`||
|accordion|开启手风琴效果|`boolean`|`-`||
|auto-scroll-into-view|是否自动滚动选中项目到可见区域|`boolean`|`-`||
|show-collapse-button|是否内置折叠按钮|`boolean`|`-`||
|selected-keys **(v-model)**|选中的菜单项 key 数组|`string[]`|`-`||
|default-selected-keys|默认选中的菜单项 key 数组|`string[]`|`[]`||
|open-keys **(v-model)**|展开的子菜单 key 数组|`string[]`|`-`||
|default-open-keys|默认展开的子菜单 key 数组|`string[]`|`[]`||
|scroll-config|滚动到可见区域的配置项，接收所有[scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)的参数|`{ [key: string]: any }`|`-`||
|trigger-props|弹出模式下可接受所有 `Trigger` 的 `Props`|`TriggerProps`|`-`||
|tooltip-props|弹出模式下可接受所有 `ToolTip` 的 `Props`|`object`|`-`||
|auto-open-selected|默认展开选中的菜单|`boolean`|`-`|2.8.0|
|breakpoint|响应式的断点, 详见[响应式栅格](/vue/component/grid)|`'xxl' \| 'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'`|`-`|2.18.0|
|popup-max-height|弹出框的最大高度|`boolean \| number`|`true`|2.23.0|
|prefix-cls||`string`|`-`||
|in-trigger||`boolean`|`-`||
|sider-collapsed||`boolean`|`-`||
|is-root||`boolean`|`-`||

### `<SubMenu>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|title|子菜单的标题|`string`|`-`||
|selectable|弹出模式下，是否将多级菜单头也作为一个菜单项，支持点击选中等状态|`boolean`|`-`||
|popup|是否强制使用弹出模式，`level` 表示当前子菜单的层级|`boolean \| ((level: number) => boolean)`|`false`||
|popup-max-height|弹出框的最大高度|`boolean \| number`|`true`|2.23.0|

### `<MenuItemGroup>` Props

|参数名|描述|类型|默认值|
|---|---|---|---|
|title|菜单组的标题|`string`|`-`|

### `<MenuItem>` Props

|参数名|描述|类型|默认值|
|---|---|---|---|
|disabled|是否禁用|`boolean`|`false`|

## FAQ

## zh-CN

### `<MenuItem>` 和 `<SubMenu>` 组件的 `key` 属性为必填

在 `<Menu>` 组件中使用 `<MenuItem>` 和 `<SubMenu>` 组件时，请传入唯一的 `key` 属性。
组件内部在进行计算时会依赖此值，如果没有赋值会导致部分场景下异常

---

## en-US

### The `key` attribute of `<MenuItem>` and `<SubMenu>` components is required

When using `<MenuItem>` and `<SubMenu>` components in the `<Menu>` component, please pass in the unique `key` attribute.
The component will rely on this value when calculating internally. If no value is assigned, some Abnormality in the scene

---