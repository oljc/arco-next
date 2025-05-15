```yaml
meta:
  type: Component
  category: Feedback
title: Result
description: It is used to feed back the processing results of a series of operation tasks. It is used when there are important operations that need to inform the user of the processing results and the feedback content is more complicated.
```

@import ./**demo**/basic.md

@import ./**demo**/success.md

@import ./**demo**/warning.md

@import ./**demo**/error.md

@import ./**demo**/403.md

@import ./**demo**/404.md

@import ./**demo**/500.md

@import ./**demo**/custom.md

@import ./**demo**/all.md

## API

### `<Result>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|status|The status displayed on the result page|`'info' \| 'success' \| 'warning' \| 'error' \| '403' \| '404' \| '500' \| null`|`'info'`|
|title|Title|`string`|`-`|
|subtitle|Subtitle|`string`|`-`|