```yaml
meta:
  type: 组件
  category: 数据输入
title: 选择器 Select
description: 当用户需要从一组同类数据中选择一个或多个时，可以使用下拉选择器，点击后选择对应项。
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

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|multiple|是否开启多选模式（多选模式默认开启搜索）|`boolean`|`false`||
|model-value **(v-model)**|绑定值|`\| string \| number \| boolean \| Record<string, any> \| (string \| number \| boolean \| Record<string, any>)[]`|`-`||
|default-value|默认值（非受控模式）|`\| string \| number \| boolean \| Record<string, unknown> \| (string \| number \| boolean \| Record<string, unknown>)[]`|`'' \\| []`||
|input-value **(v-model)**|输入框的值|`string`|`-`||
|default-input-value|输入框的默认值（非受控模式）|`string`|`''`||
|size|选择框的大小|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`||
|placeholder|占位符|`string`|`-`||
|loading|是否为加载中状态|`boolean`|`false`||
|disabled|是否禁用|`boolean`|`false`||
|error|是否为错误状态|`boolean`|`false`||
|allow-clear|是否允许清空|`boolean`|`false`||
|allow-search|是否允许搜索|`boolean \| { retainInputValue?: boolean }`|`false (single) \\| true (multiple)`||
|allow-create|是否允许创建|`boolean`|`false`||
|max-tag-count|多选模式下，最多显示的标签数量。0 表示不限制|`number`|`0`||
|popup-container|弹出框的挂载容器|`string \| HTMLElement`|`-`||
|bordered|是否显示输入框的边框|`boolean`|`true`||
|default-active-first-option|是否在无值时默认选择第一个选项|`boolean`|`true`|2.43.0|
|popup-visible **(v-model)**|是否显示下拉菜单|`boolean`|`-`||
|default-popup-visible|弹出框默认是否可见（非受控模式）|`boolean`|`false`||
|unmount-on-close|是否在下拉菜单关闭时销毁元素|`boolean`|`false`||
|filter-option|是否过滤选项|`boolean \| ((inputValue: string, option: SelectOptionData) => boolean)`|`true`||
|options|选项数据|`(string \| number \| boolean \| SelectOptionData \| SelectOptionGroup)[]`|`[]`||
|virtual-list-props|传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#VirtualListProps)|`VirtualListProps`|`-`||
|trigger-props|下拉菜单的触发器属性|`TriggerProps`|`-`||
|format-label|格式化显示内容|`(data: SelectOptionData) => string`|`-`||
|fallback-option|自定义值中不存在的选项|`boolean \| ((value: string \| number \| boolean \| Record<string, unknown>) => SelectOptionData)`|`true`|2.10.0|
|show-extra-options|是否在下拉菜单中显示额外选项|`boolean`|`true`|2.10.0|
|value-key|用于确定选项键值的属性名|`string`|`'value'`|2.18.0|
|search-delay|触发搜索事件的延迟时间|`number`|`500`|2.18.0|
|limit|多选时最多的选择个数|`number`|`0`|2.18.0|
|field-names|自定义 `SelectOptionData` 中的字段|`SelectFieldNames`|`-`|2.22.0|
|scrollbar|是否开启虚拟滚动条|`boolean \| ScrollbarProps`|`true`|2.38.0|
|show-header-on-empty|空状态时是否显示header|`boolean`|`false`||
|show-footer-on-empty|空状态时是否显示footer|`boolean`|`false`||
|tag-nowrap|标签内容不换行|`boolean`|`false`|2.56.1|

### `<Option>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|value|选项值（如不填，会从内容中获取）|`string\|number\|boolean\|object`|`-`||
|label|选项标签（如不填，会从内容中获取）|`string`|`-`||
|disabled|是否禁用|`boolean`|`-`||
|tag-props|展示的标签属性|`TagProps`|`-`|2.8.0|
|extra|额外数据。2.18.0 版本废弃，可使用对象形式的 value 扩展数据|`object`|`-`|2.10.0|
|index|用于手动指定选项的 index|`number`|`-`|2.20.0|
|internal||`boolean`|`-`||

### `<Optgroup>` Props

|参数名|描述|类型|默认值|
|---|---|---|---|
|label|选项组的标题|`string`|`-`|

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

|参数名|描述|类型|默认值|
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

|参数名|描述|类型|默认值|
|---|---|---|---|
|key **(必填)**||`VirtualItemKey`|``|
|index **(必填)**||`number`|``|
|item **(必填)**||`unknown`|``|

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