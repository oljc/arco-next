```yaml
meta:
  type: Component
  category: Common
title: Typography
description: Used to display titles, paragraphs, and text content.
```

@import ./**demo**/basic.md

@import ./**demo**/title.md

@import ./**demo**/text.md

@import ./**demo**/paragraph.md

@import ./**demo**/operations.md

@import ./**demo**/ellipsis.md

## API

### `<Typography>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|


### `<Common>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|component **(required)**||`BaseInternalProps['component']`|`-`||
|type|Text type|`'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning'`|`-`||
|bold|Whether enable bold style|`boolean`|`-`||
|mark|Mark style|`boolean \| { color: string }`|`false`||
|underline|Whether enable underline style|`boolean`|`-`||
|delete|Whether enable delete style|`boolean`|`-`||
|code|Whether enable code style|`boolean`|`-`||
|disabled|Whether disabled|`boolean`|`-`||
|editable|Whether it's editable|`boolean`|`-`||
|editing **(v-model)**|Whether it's editing|`boolean`|`-`||
|default-editing|Default editing state|`boolean`|`-`||
|edit-text **(v-model)**|Edit text|`string`|`-`||
|copyable|Whether turn on copy functionality|`boolean`|`-`||
|copy-text|Copied text|`string`|`-`||
|copy-delay|After the copy is successful, the delay time for the copy button to return to the clickable state, in milliseconds|`number`|`3000`|2.16.0|
|ellipsis|Automatic overflow omission, refer to [EllipsisConfig](#EllipsisConfig) for more information.|`boolean \| EllipsisConfig`|`false`||
|edit-tooltip-props|Edit button question prompt configuration|`object`|`-`|2.32.0|
|copy-tooltip-props|Copy button question prompt configuration|`object`|`-`|2.32.0|

### `<TypographyTitle>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|heading|Heading level, equivalent to `h1` `h2` `h3` `h4` `h5` `h6`|`'1' \| '2' \| '3' \| '4' \| '5' \| '6'`|`1`|

### `<TypographyParagraph>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|blockquote|Whether enable blockquote|`boolean`|`-`|
|spacing|The line height of the paragraph, the default line height is recommended for long text (more than 5 lines). `close` line height is recommended for short text (less than or equal to 3 lines).|`'default' \| 'close'`|`'default'`|

### `<TypographyText>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|ellipsis||`BaseProps['ellipsis']`|`false`|

### EllipsisConfig

|Parameter|Description|Type|Default|Version|
|---|---|---|---|---|
|rows|The number of omitted lines|`number`|`1`||
|expandable|Whether expandable|`boolean`|``||
|ellipsisStr|Ellipsis string|`string`|`'...'`||
|suffix|Suffix|`string`|``||
|showTooltip|Pop-up box when configuration is omitted|`boolean \| { type: 'tooltip' \| 'popover'; props: Record<string, any> }`|`false`||
|css|Whether to use CSS ellipsis (expansion, custom ellipsis and suffix are not supported in this mode)|`boolean`|`false`|2.37.0|