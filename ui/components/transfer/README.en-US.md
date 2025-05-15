```yaml
meta:
  type: Component
  category: Data Entry
title: Transfer
description: A two-column multi-select component that moves elements from one column to another in real time.
```

@import ./**demo**/basic.md

@import ./**demo**/search.md

@import ./**demo**/one-way.md

@import ./**demo**/custom.md

@import ./**demo**/simple.md

@import ./**demo**/tree.md

@import ./**demo**/custom-header.md

## API

### `<Transfer>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|data|Data of the transfer|`TransferItem[]`|`[]`||
|model-value **(v-model)**|Value in the target selection box|`string[]`|`-`||
|default-value|The default value in the target selection box (uncontrolled state)|`string[]`|`[]`||
|selected **(v-model)**|Selected option value|`string[]`|`-`||
|default-selected|The option value selected by default (uncontrolled state)|`string[]`|`[]`||
|disabled|Whether to disable|`boolean`|`false`||
|simple|Whether to open the simple mode (click the option to move)|`boolean`|`false`||
|one-way|Whether to open the one-way mode (only move to the target selection box)|`boolean`|`false`||
|show-search|Whether to show the search input|`boolean`|`false`||
|show-select-all|Whether show select all checkbox on the header|`boolean`|`true`|2.39.0|
|title|The title of the source and target selection boxes|`string[]`|`['Source', 'Target']`||
|source-input-search-props|Search box configuration for source selection box|`object`|`-`|2.51.1|
|target-input-search-props|Search box configuration for target selection box|`object`|`-`|2.51.1|

### TransferItem

|Parameter|Description|Type|Default|
|---|---|---|---|
|value **(required)**|Option value|`string`|``|
|label **(required)**|Option label|`string`|``|
|disabled **(required)**|Whether to disable|`boolean`|``|