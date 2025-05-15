```yaml
meta:
  type: Component
  category: Data Entry
title: Select
description: When users need to select one or more from a group of similar data, they can use the drop-down selector, click and select the corresponding item.
```

@import ./**demo**/basic.md

@import ./**demo**/clear.md

@import ./**demo**/multiple.md

@import ./**demo**/size.md

@import ./**demo**/loading.md

@import ./**demo**/header.md

@import ./**demo**/footer.md

@import ./**demo**/border.md

@import ./**demo**/create.md

@import ./**demo**/search.md

@import ./**demo**/scroll.md

@import ./**demo**/fallback.md

@import ./**demo**/remote.md

@import ./**demo**/group.md

@import ./**demo**/label.md

@import ./**demo**/linkage.md

@import ./**demo**/field-names.md

@import ./**demo**/virtual-list.md

## API

### `<Select>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|multiple|Whether to open multi-select mode (The search is turned on by default in the multi-select mode)|`boolean`|`false`||
|model-value **(v-model)**|Value|`\| string \| number \| boolean \| Record<string, any> \| (string \| number \| boolean \| Record<string, any>)[]`|`-`||
|default-value|Default value (uncontrolled mode)|`\| string \| number \| boolean \| Record<string, unknown> \| (string \| number \| boolean \| Record<string, unknown>)[]`|`'' \\| []`||
|input-value **(v-model)**|The value of the input|`string`|`-`||
|default-input-value|The default value of the input (uncontrolled mode)|`string`|`''`||
|size|The size of the select|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`||
|placeholder|Placeholder|`string`|`-`||
|loading|Whether it is loading state|`boolean`|`false`||
|disabled|Whether to disable|`boolean`|`false`||
|error|Whether it is an error state|`boolean`|`false`||
|allow-clear|Whether to allow clear|`boolean`|`false`||
|allow-search|Whether to allow searching|`boolean \| { retainInputValue?: boolean }`|`false (single) \\| true (multiple)`||
|allow-create|Whether to allow creation|`boolean`|`false`||
|max-tag-count|In multi-select mode, the maximum number of labels displayed. 0 means unlimited|`number`|`0`||
|popup-container|Mount container for popup|`string \| HTMLElement`|`-`||
|bordered|Whether to display the border of the input box|`boolean`|`true`||
|default-active-first-option|Whether to select the first option by default when there is no value|`boolean`|`true`|2.43.0|
|popup-visible **(v-model)**|Whether to show the dropdown|`boolean`|`-`||
|default-popup-visible|Whether the popup is visible by default (uncontrolled mode)|`boolean`|`false`||
|unmount-on-close|Whether to destroy the element when the dropdown is closed|`boolean`|`false`||
|filter-option|Whether to filter options|`boolean \| ((inputValue: string, option: SelectOptionData) => boolean)`|`true`||
|options|Option data|`(string \| number \| boolean \| SelectOptionData \| SelectOptionGroup)[]`|`[]`||
|virtual-list-props|Pass the virtual list attribute, pass in this parameter to turn on virtual scrolling [VirtualListProps](#VirtualListProps)|`VirtualListProps`|`-`||
|trigger-props|Trigger props of the drop-down menu|`TriggerProps`|`-`||
|format-label|Format display content|`(data: SelectOptionData) => string`|`-`||
|fallback-option|Options that do not exist in custom values|`boolean \| ((value: string \| number \| boolean \| Record<string, unknown>) => SelectOptionData)`|`true`|2.10.0|
|show-extra-options|Options that do not exist in custom values|`boolean`|`true`|2.10.0|
|value-key|Used to determine the option key value attribute name|`string`|`'value'`|2.18.0|
|search-delay|Delay time to trigger search event|`number`|`500`|2.18.0|
|limit|Maximum number of choices in multiple choice|`number`|`0`|2.18.0|
|field-names|Customize fields in `SelectOptionData`|`SelectFieldNames`|`-`|2.22.0|
|scrollbar|Whether to enable virtual scroll bar|`boolean \| ScrollbarProps`|`true`|2.38.0|
|show-header-on-empty|Whether to display the header in the empty state|`boolean`|`false`||
|show-footer-on-empty|Whether to display the footer in the empty state|`boolean`|`false`||
|tag-nowrap|Tag content does not wrap|`boolean`|`false`|2.56.1|

### `<Option>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|value|Option value (if not filled, it will be obtained from the content)|`string\|number\|boolean\|object`|`-`||
|label|Option label (if not filled, it will be obtained from the content)|`string`|`-`||
|disabled|Whether to disable|`boolean`|`-`||
|tag-props|Displayed tag attributes|`TagProps`|`-`|2.8.0|
|extra|Extra data|`object`|`-`|2.10.0|
|index|index for manually specifying option|`number`|`-`|2.20.0|
|internal||`boolean`|`-`||

### `<Optgroup>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|label|Title of option group|`string`|`-`|

### Type

```ts
/**
 * @zh 选项
 * @en Option
 */
type Option = string | number | SelectOptionData | SelectOptionGroup;

/**
 * @zh 筛选
 * @en Filter
 */
type FilterOption = boolean | ((inputValue: string, option: SelectOptionData) => boolean);
```

### SelectProps

|Parameter|Description|Type|Default|
|---|---|---|---|
|options||`(string \| number \| boolean \| SelectOptionData \| SelectOptionGroup)[]`|``|
|multiple||`boolean`|``|
|modelValue||`\| string     \| number     \| boolean     \| Record<string, unknown>     \| (string \| number \| boolean \| Record<string, unknown>)[]`|``|
|defaultValue||`\| string     \| number     \| boolean     \| Record<string, unknown>     \| (string \| number \| boolean \| Record<string, unknown>)[]`|``|
|inputValue||`string`|``|
|defaultInputValue||`string`|``|
|size||`Size`|``|
|placeholder||`string`|``|
|loading||`boolean`|``|
|disabled||`boolean`|``|
|error||`boolean`|``|
|allowClear||`boolean`|``|
|allowSearch||`boolean \| { retainInputValue?: boolean }`|``|
|allowCreate||`boolean`|``|
|maxTagCount||`number`|``|
|popupContainer||`string \| HTMLElement`|``|
|bordered||`boolean`|``|
|popupVisible||`boolean`|``|
|defaultPopupVisible||`boolean`|``|
|unmountOnClose||`boolean`|``|
|filterOption||`boolean \| ((inputValue: string, option: SelectOptionData) => boolean)`|``|
|virtualListProps||`VirtualListProps`|``|
|triggerProps||`TriggerProps`|``|
|formatLabel||`(data: SelectOptionData) => string`|``|
|fallbackOption||`\| boolean     \| ((value: string \| number \| boolean \| Record<string, unknown>) => SelectOptionData)`|``|
|showExtraOptions||`boolean`|``|
|valueKey||`string`|``|
|searchDelay||`number`|``|
|limit||`number`|``|
|fieldNames||`SelectFieldNames`|``|
|showHeaderOnEmpty||`boolean`|``|
|showFooterOnEmpty||`boolean`|``|

### InternalDataItem

|Parameter|Description|Type|Default|
|---|---|---|---|
|key **(required)**||`VirtualItemKey`|``|
|index **(required)**||`number`|``|
|item **(required)**||`unknown`|``|

## zh-CN

## FAQ

### 使用 `Object` 格式作为选项的值

当使用 `Object` 格式作为选项的值时，需要通过 `value-key` 属性为选择器指定获取唯一标识的字段名，默认值为 `value`.
此外 `value` 的对象值需要在 `setup` 中定义好，不能够在模版中创建对象，这样会导致 `Option` 组件的重复渲染。

例如当我需要指定 `key` 为唯一标识时：

```vue
<template>
  <a-select
    v-model="value"
    :style="{ width: '320px' }"
    placeholder="Please select ..."
    value-key="key"
  >
    <a-option v-for="item of data" :value="item" :label="item.label" />
  </a-select>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const value = ref();
    const data = [
      {
        value: 'beijing',
        label: 'Beijing',
        key: 'extra1',
      },
      {
        value: 'shanghai',
        label: 'Shanghai',
        key: 'extra2',
      },
      {
        value: 'guangzhou',
        label: 'Guangzhou',
        key: 'extra3',
      },
      {
        value: 'chengdu',
        label: 'Chengdu',
        key: 'extra4',
      },
    ];

    return {
      value,
      data,
    };
  },
};
</script>
```

### 滚动容器中的下拉菜单分离问题

`Select` 组件默认没有开启容器滚动的事件监听功能，如果遇到在滚动容器中下拉菜单分离的问题，可以手动开启内部 `Trigger` 组件的 `updateAtScroll` 功能。
如果是在全局环境中存在此种情况，可以使用 `ConfigProvider` 组件默认开启此属性。

```vue
<a-select :trigger-props="{ updateAtScroll: true }"></a-select>
```

---

## en-US

## FAQ

### Use `Object` format as option value

When using the `Object` format as the value of the option, you need to specify the field name to obtain the unique identifier for the selector through the `value-key` attribute, and the default value is `value`.
In addition, the object value of `value` needs to be defined in `setup`, and the object cannot be created in the template, which will lead to repeated rendering of the `Option` component.

For example, when I need to specify `key` as a unique identifier:

```vue
<template>
  <a-select
    v-model="value"
    :style="{ width: '320px' }"
    placeholder="Please select ..."
    value-key="key"
  >
    <a-option v-for="item of data" :value="item" :label="item.label" />
  </a-select>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const value = ref();
    const data = [
      {
        value: 'beijing',
        label: 'Beijing',
        key: 'extra1',
      },
      {
        value: 'shanghai',
        label: 'Shanghai',
        key: 'extra2',
      },
      {
        value: 'guangzhou',
        label: 'Guangzhou',
        key: 'extra3',
      },
      {
        value: 'chengdu',
        label: 'Chengdu',
        key: 'extra4',
      },
    ];

    return {
      value,
      data,
    };
  },
};
</script>
```

### Dropdown menu separation issue in scroll container

The `Select` component does not enable the container scrolling event monitoring function by default. If you encounter the problem of separating the drop-down menu in the scrolling container, you can manually enable the `updateAtScroll` function of the internal `Trigger` component.
If this is the case in the global environment, you can use the `ConfigProvider` component to enable this property by default.

```vue
<a-select :trigger-props="{ updateAtScroll: true }"></a-select>
```

---