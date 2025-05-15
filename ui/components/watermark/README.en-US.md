```yaml
meta:
  type: Component
  category: Other
title: Watermark
description: Used to Add a watermark to a specified area.
```

@import ./**demo**/basic.md

@import ./**demo**/image.md

@import ./**demo**/custom.md

@import ./**demo**/multiline.md

## API

### `<Watermark>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|content|Watermark text content|`string \| string[]`|`-`||
|image|Image watermark address|`string`|`-`||
|width|Watermark width|`number`|`-`||
|height|Watermark height|`number`|`-`|2.1.0|
|gap|Watermark spacing|`[number, number]`|`() => [90, 90]`||
|offset|The offset from the upper left corner of the container, the default is half the watermark spacing|`[number, number]`|`[gap[0]/2, gap[1]/2]`||
|rotate|Watermark rotation angle|`number`|`-22`||
|font|Watermark font style, specific parameter configuration see [WatermarkFont](#WatermarkFont)|`WatermarkFont`|`-`||
|z-index|Watermark z-index|`number`|`6`||
|alpha|Watermark opacity|`number`|`1`||
|anti-tamper|Watermark anti-tampering|`boolean`|`true`||
|grayscale|Grayscale watermark|`boolean`|`-`||
|default-value|Default value (uncontrolled state)|`\| string \| number \| Record<string, any> \| (string \| number \| Record<string, any> \| (string \| number \| Record<string, any>)[])[] \| undefined`|`'' \\| undefined \\| []`||
|repeat|Whether to repeat the watermark|`boolean`|`true`||
|staggered|Whether to stagger the arrangement layout|`boolean`|`true`||

### WatermarkFont

|Parameter|Description|Type|Default|Version|
|---|---|---|---|---|
|color|Font color|`string`|`rgba(0, 0, 0, 0.15)`|0.12.0|
|fontSize|Font size|`number`|`16`||
|fontFamily|Font family|`string`|`sans-serif`||
|fontStyle|Font style|`'none' \| 'normal' \| 'italic' \| 'oblique'`|`normal`||
|textAlign|Font align|`'start' \| 'end' \| 'left' \| 'right' \| 'center'`|`center`||
|fontWeight|Font weight|`'normal' \| 'bold' \| 'bolder' \| 'lighter' \| number`|`normal`||