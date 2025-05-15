```yaml
meta:
  type: Component
  category: Common
title: Link
description: The basic style of the link.
```

@import ./**demo**/basic.md

@import ./**demo**/status.md

@import ./**demo**/hoverable.md


## API

### `<link>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|href|Link address|`string`|`-`||
|status|Link status|`'normal' \| 'warning' \| 'success' \| 'danger'`|`'normal'`||
|hoverable|Whether to hide background when hover|`boolean`|`true`|2.7.0|
|icon|icon|`boolean`|`-`|2.7.0|
|loading|Whether the link is in the loading state|`boolean`|`-`|2.37.0|
|disabled|Whether the link is disabled|`boolean`|`-`||