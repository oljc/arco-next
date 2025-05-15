```yaml
meta:
  type: Component
  category: Navigation
title: Menu
description: Organize, arrange, and display a list of options.
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

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|style||`StyleValue`|`-`||
|theme|Menu theme|`'light' \| 'dark'`|`'light'`||
|mode|The mode of menu|`'vertical' \| 'horizontal' \| 'pop' \| 'popButton'`|`'vertical'`||
|level-indent|Indentation between levels|`number`|`-`||
|auto-open|Expand all multi-level menus by default|`boolean`|`-`||
|collapsed **(v-model)**|Whether to collapse the menu|`boolean`|`-`||
|default-collapsed|Whether to collapse the menu by default|`boolean`|`-`||
|collapsed-width|Collapse menu width|`number`|`-`||
|accordion|Turn on the accordion effect|`boolean`|`-`||
|auto-scroll-into-view|Whether to automatically scroll the selected item to the visible area|`boolean`|`-`||
|show-collapse-button|Whether built-in folding button|`boolean`|`-`||
|selected-keys **(v-model)**|The selected menu item key array|`string[]`|`-`||
|default-selected-keys|The key array of the menu items selected by default|`string[]`|`[]`||
|open-keys **(v-model)**|Expanded submenu key array|`string[]`|`-`||
|default-open-keys|The default expanded submenu key array|`string[]`|`[]`||
|scroll-config|Scroll to the configuration items in the visible area and receive all the parameters of [scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)|`{ [key: string]: any }`|`-`||
|trigger-props|Accept all `Props` of `Trigger` in pop-up mode|`TriggerProps`|`-`||
|tooltip-props|Accept all `Props` of `ToolTip` in pop-up mode|`object`|`-`||
|auto-open-selected|Expand the selected menus by default|`boolean`|`-`|2.8.0|
|breakpoint|Responsive breakpoints, see [Responsive Grid](/vue/component/grid) for details|`'xxl' \| 'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'`|`-`|2.18.0|
|popup-max-height|The maximum height of popover|`boolean \| number`|`true`|2.23.0|
|prefix-cls||`string`|`-`||
|in-trigger||`boolean`|`-`||
|sider-collapsed||`boolean`|`-`||
|is-root||`boolean`|`-`||

### `<SubMenu>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|title|The title of the submenu|`string`|`-`||
|selectable|In the pop-up mode, whether the multi-level menu header is also used as a menu item to support the state such as click to select|`boolean`|`-`||
|popup|Whether to force the use of pop-up mode, `level` indicates the level of the current submenu|`boolean \| ((level: number) => boolean)`|`false`||
|popup-max-height|The maximum height of popover|`boolean \| number`|`true`|2.23.0|

### `<MenuItemGroup>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|title|The title of the menu group|`string`|`-`|

### `<MenuItem>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|disabled|Whether to disable|`boolean`|`false`|

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