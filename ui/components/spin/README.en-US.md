```yaml
meta:
  type: Component
  category: Feedback
title: Spin
description: Used for the loading state of pages and blocks-when a part of the page is waiting for asynchronous data or is in the rendering process, appropriate loading dynamics will effectively alleviate user anxiety.
```

@import ./**demo**/basic.md

@import ./**demo**/size.md

@import ./**demo**/dot.md

@import ./**demo**/container.md

@import ./**demo**/tip.md

@import ./**demo**/icon.md

## API

### `<Spin>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|size|Size|`number`|`-`|
|loading|Whether it is loading state (Only effective in container mode)|`boolean`|`-`|
|dot|Whether to use dot type animation|`boolean`|`-`|
|tip|Prompt content|`string`|`-`|
|hide-icon|Whether to hide the icon|`boolean`|`false`|