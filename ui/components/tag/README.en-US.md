```yaml
meta:
  type: Component
  category: Data Display
title: Tag
description: Used for the selection, screening and classification of information. Users use tags for information feedback and interactive operations.
```

@import ./**demo**/basic.md

@import ./**demo**/closeable.md

@import ./**demo**/dynamically.md

@import ./**demo**/checkable.md

@import ./**demo**/color.md

@import ./**demo**/size.md

@import ./**demo**/loading.md

@import ./**demo**/icon.md

@import ./**demo**/bordered.md

## API

### `<Tag>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|color|Label color|`'red' \| 'orangered' \| 'orange' \| 'gold' \| 'lime' \| 'green' \| 'cyan' \| 'blue' \| 'arcoblue' \| 'purple' \| 'pinkpurple' \| 'magenta' \| 'gray'`|`-`||
|size|Label size|`'small' \| 'medium' \| 'large'`|`'medium'`||
|bordered|Whether the tag is bordered|`boolean`|`false`|2.33.0|
|visible **(v-model)**|Whether the tag is visible|`boolean`|`-`||
|default-visible|Whether the tag is visible by default|`boolean`|`true`||
|loading|Whether the tag is loading state|`boolean`|`false`||
|closable|Whether the tag can be closed|`boolean`|`false`||
|checkable|Whether the tag can be checked|`boolean`|`false`||
|checked **(v-model)**|Whether the tag is checked (available when the tag is checkable)|`boolean`|`-`||
|default-checked|Whether the tag is checked by default (available when the tag is checkable)|`boolean`|`true`||
|nowrap|Tag content does not wrap|`boolean`|`false`|2.56.1|