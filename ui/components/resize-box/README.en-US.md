```yaml
meta:
  type: Component
  category: Other
title: ResizeBox
description: Telescopic frame components.
```

@import ./**demo**/basic.md

@import ./**demo**/controlled.md

@import ./**demo**/layout.md

@import ./**demo**/custom-triggers.md

## API

### `<ResizeBox>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|width **(v-model)**|Width|`number`|`-`|
|height **(v-model)**|Height|`number`|`-`|
|component|The html tag of the telescopic box|`string`|`'div'`|
|directions|Can be stretched side, there are up, down, left and right can be used|`('left' \| 'right' \| 'top' \| 'bottom')[]`|`['right']`|