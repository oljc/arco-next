```yaml
meta:
  type: Component
  category: Data Display
title: Card
description: Card is generally used as a concise introduction or a large plate and entrance of information.
```

_Auto translate by google._

@import ./**demo**/basic.md

@import ./**demo**/hoverable.md

@import ./**demo**/bordered.md

@import ./**demo**/content.md

@import ./**demo**/meta.md

@import ./**demo**/row.md

@import ./**demo**/grid.md

@import ./**demo**/inner.md

@import ./**demo**/actions.md

## API

### `<card>` Props

| Attribute    | Description                                           | Type                  |   Default    |
| ------------ | ----------------------------------------------------- | --------------------- | :----------: |
| bordered     | Whether to render the border                          | `boolean`             |    `true`    |
| loading      | Loading status                                        | `boolean`             |   `false`    |
| hoverable    | Can be hovered                                        | `boolean`             |   `false`    |
| size         | Size of card                                          | `'medium' \| 'small'` |  `'medium'`  |
| header-style | The additional css style to apply to card head        | `CSSProperties`       | `() => ({})` |
| body-style   | The additional css style to apply to card content     | `CSSProperties`       | `() => ({})` |
| title        | Title of card                                         | `string`              |     `-`      |
| extra        | Content to render in the top-right corner of the card | `string`              |     `-`      |

### `<card>` Slots

| Slot Name | Description                                           | Parameters |
| --------- | ----------------------------------------------------- | ---------- |
| actions   | The action list which shows at the bottom of the Card | -          |
| cover     | Cover of card                                         | -          |
| extra     | Content to render in the top-right corner of the card | -          |
| title     | Title of card                                         | -          |

### `<card-meta>` Props

| Attribute   | Description         | Type     | Default |
| ----------- | ------------------- | -------- | :-----: |
| title       | Title of card       | `string` |   `-`   |
| description | Description of card | `string` |   `-`   |

### `<card-meta>` Slots

| Slot Name   | Description         | Parameters |
| ----------- | ------------------- | ---------- |
| description | Description of card | -          |
| title       | Title of card       | -          |
| avatar      | Avatar of card      | -          |

### `<card-grid>` Props

| Attribute | Description      | Type      | Default |
| --------- | ---------------- | --------- | :-----: |
| hoverable | Whether to hover | `boolean` | `false` |
