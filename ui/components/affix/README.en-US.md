```yaml
meta:
  type: Component
  category: Other
title: Affix
description: Pin the page elements to the visible range. When the content area is relatively long and the page needs to be scrolled, the fixed pin can fix the content on the screen. Often used for side menus and button combinations.
```

@import ./**demo**/basic.md

@import ./**demo**/top.md

@import ./**demo**/bottom.md

@import ./**demo**/fix-change.md

@import ./**demo**/container.md

## API

### `<affix>` API

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|offsetTop|Triggered when the specified offset is reached from the top of the window|`number`|`0`|
|offsetBottom|Triggered when the specified offset is reached from the bottom of the window|`number`|-|
|target|Scroll container, default is `window`|`string | HTMLElement | Window`|-|
|targetContainer|The outer scroll element of `target`, the default is `window`. `Affix` will monitor the scroll event of the element and update the position of the anchor in real time. The main purpose is to solve the problem that if the outer element scrolls when the target attribute is specified as a non-window element, it may cause the nail to escape from the container.|`string | HTMLElement | Window`|-|

### `<affix>` Events

|Event|Description|Parameters|
|---|---|---|
|change|undefined|