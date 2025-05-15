```yaml
meta:
  type: Component
  category: Data Display
title: Statistic
description: Highlight a certain number or group of numbers and statistical data with descriptions.
```

@import ./**demo**/basic.md

@import ./**demo**/prefix.md

@import ./**demo**/animation.md

@import ./**demo**/countdown.md

## API

### `<Statistic>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|title|Title of the numerical display|`string`|`-`||
|value|Numerical display value|`number \| Date`|`-`||
|format|Format of numerical display [dayjs](https://day.js.org/docs/en/display/format) (used in date mode)|`string`|`'HH:mm:ss'`||
|extra|Additional display content|`string`|`-`||
|start|Whether to start animation|`boolean`|`true`||
|precision|Decimal reserved digits (used in digital mode)|`number`|`0`||
|separator|Carry separator (used in number mode)|`string`|`-`||
|show-group-separator|Whether to display the carry separator (used in number mode)|`boolean`|`false`||
|animation|Whether to turn on animation|`boolean`|`false`||
|animation-duration|Animation's duration time|`number`|`2000`||
|value-from|The starting value of the animation|`number`|`-`||
|placeholder|Prompt text (displayed when value is undefined )|`string`|`-`|2.28.0|
|value-style|Custom value style|`CSSProperties`|`-`|2.32.0|

### `<Countdown>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|title|Countdown title|`string`|`-`||
|value|Countdown value|`number`|`() => Date.now() + 300000`||
|now|Used to correct the incorrect display of the initialization time|`number`|`() => Date.now()`||
|format|Countdown display format [dayjs](https://day.js.org/docs/en/display/format)|`string`|`'HH:mm:ss'`||
|start|Whether to start the countdown|`boolean`|`true`||
|value-style|Custom value style|`CSSProperties`|`-`|2.32.0|