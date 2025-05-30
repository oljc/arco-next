```yaml
meta:
  type: Component
  category: Data Display
title: Image
description: Used to show and preview pictures.
```

_Auto translate by google._

@import ./**demo**/basic.md

@import ./**demo**/caption.md

@import ./**demo**/extra.md

@import ./**demo**/error.md

@import ./**demo**/loader.md

@import ./**demo**/progressive-loader.md

@import ./**demo**/custom-preview-actions.md

@import ./**demo**/preview-group.md

@import ./**demo**/component-preview.md

@import ./**demo**/component-preview-group.md

@import ./**demo**/preview-popup-container.md

## API

### `<image>` Props

| Attribute                     | Description                                                                                                                          | Type                                                       |  Default  | version |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | :-------: | :------ |
| src                           | Image src                                                                                                                            | `string`                                                   |    `-`    |         |
| width                         | Image width                                                                                                                          | `string \| number`                                         |    `-`    |         |
| height                        | Image height                                                                                                                         | `string \| number`                                         |    `-`    |         |
| title                         | Title                                                                                                                                | `string`                                                   |    `-`    |         |
| description                   | Description, will be displayed at the bottom. if alt has no value, it will be set to alt                                             | `string`                                                   |    `-`    |         |
| fit                           | indicate how the image should be resized to fit its container                                                                        | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` |    `-`    |         |
| alt                           | Text description of the image                                                                                                        | `string`                                                   |    `-`    |         |
| hide-footer                   | Whether to hide footer (Version 2.36.0 supports the 'never' parameter, which supports displaying bottom content when loading errors) | `boolean \| 'never'`                                       |  `false`  |         |
| footer-position               | The position shown at the bottom                                                                                                     | `'inner' \| 'outer'`                                       | `'inner'` |         |
| show-loader                   | Whether to show the loading effect                                                                                                   | `boolean`                                                  |  `false`  |         |
| preview                       | Whether to enable preview                                                                                                            | `boolean`                                                  |  `true`   |         |
| preview-visible **(v-model)** | Control the open state of the preview, can be used in conjunction with previewVisibleChange                                          | `boolean`                                                  |    `-`    |         |
| default-preview-visible       | The default open state of the preview                                                                                                | `boolean`                                                  |  `false`  |         |
| preview-props                 | Preview configuration items (all options are optional) [ImagePreviewProps](#image-preview%20Props)                                   | `ImagePreviewProps`                                        |    `-`    |         |
| footer-class                  | The class name of the bottom display area                                                                                            | `string\|array\|object`                                    |    `-`    | 2.23.0  |

### `<image>` Events

| Event Name             | Description                        | Parameters         |
| ---------------------- | ---------------------------------- | ------------------ |
| preview-visible-change | Preview opening and closing events | visible: `boolean` |

### `<image>` Slots

| Slot Name  | Description                          | Parameters |
| ---------- | ------------------------------------ | ---------- |
| error      | Customize error content.             | -          |
| error-icon | Customize the icon of error content. | -          |
| loader     | Customize loading effect.            | -          |
| extra      | Extra content at the bottom          | -          |

### `<image-preview>` Props

| Attribute             | Description                                                                                                   | Type                    |                                          Default                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------- | :----------------------------------------------------------------------------------------: |
| src                   | Image src                                                                                                     | `string`                |                                            `-`                                             |
| visible **(v-model)** | Whether is visible                                                                                            | `boolean`               |                                            `-`                                             |
| default-visible       | Default visibility                                                                                            | `boolean`               |                                          `false`                                           |
| mask-closable         | Whether to close the modal when mask is clicked                                                               | `boolean`               |                                           `true`                                           |
| closable              | Whether to show close button                                                                                  | `boolean`               |                                           `true`                                           |
| actions-layout        | Layout of action list                                                                                         | `string[]`              | `[  'fullScreen',  'rotateRight',  'rotateLeft',  'zoomIn',  'zoomOut',  'originalSize',]` |
| popup-container       | Set the mount point of the pop-up box, the same as the `to` of `teleport`, the default value is document.body | `HTMLElement \| string` |                                            `-`                                             |
| esc-to-close          | Whether to support the ESC key to close the preview                                                           | `boolean`               |                                           `true`                                           |
| wheel-zoom            | Whether to enable wheel zoom                                                                                  | `boolean`               |                                           `true`                                           |
| keyboard              | Whether to enable keyboard shortcuts                                                                          | `boolean`               |                                           `true`                                           |
| default-scale         | Default scale                                                                                                 | `number`                |                                            `1`                                             |
| zoom-rate             | Zoom rate, only for scroll zoom                                                                               | `number`                |                                           `1.1`                                            |

### `<image-preview>` Events

| Event Name | Description | Parameters |
| ---------- | ----------- | ---------- |
| close      | Close event | -          |

### `<image-preview>` Slots

| Slot Name | Description                       | Parameters | version |
| --------- | --------------------------------- | ---------- | :------ |
| actions   | Customize additional action items | -          | 2.17.0  |

### `<image-preview-group>` Props

| Attribute             | Description                                                                                                             | Type                    |                                          Default                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------- | :----------------------------------------------------------------------------------------: |
| src-list              | Picture list (after setting this property, the picture information of a-image subcomponent will no longer be collected) | `string[]`              |                                            `-`                                             |
| current **(v-model)** | The index of the currently displayed image                                                                              | `number`                |                                            `-`                                             |
| default-current       | The index of the first image shown                                                                                      | `number`                |                                            `0`                                             |
| infinite              | Whether to loop infinitely                                                                                              | `boolean`               |                                          `false`                                           |
| visible **(v-model)** | Whether is visible                                                                                                      | `boolean`               |                                            `-`                                             |
| default-visible       | Default visibility                                                                                                      | `boolean`               |                                          `false`                                           |
| mask-closable         | Whether to close the modal when mask is clicked                                                                         | `boolean`               |                                           `true`                                           |
| closable              | Whether to show close button                                                                                            | `boolean`               |                                           `true`                                           |
| actions-layout        | Layout of action list                                                                                                   | `string[]`              | `[  'fullScreen',  'rotateRight',  'rotateLeft',  'zoomIn',  'zoomOut',  'originalSize',]` |
| popup-container       | Set the mount point of the pop-up box, the same as the `to` of `teleport`, the default value is document.body           | `string \| HTMLElement` |                                            `-`                                             |

### `<image-preview-group>` Events

| Event Name     | Description               | Parameters         |
| -------------- | ------------------------- | ------------------ |
| change         | Image switch              | index: `number`    |
| visible-change | Preview visibility change | visible: `boolean` |

### `<image-preview-group>` Slots

| Slot Name | Description                       | Parameters | version |
| --------- | --------------------------------- | ---------- | :------ |
| actions   | Customize additional action items | -          | 2.46.0  |

### `<image-preview-action>` Props (2.17.0)

| Attribute | Description                   | Type      | Default |
| --------- | ----------------------------- | --------- | :-----: |
| name      | the name of the action        | `string`  |   `-`   |
| disabled  | Whether to disable the action | `boolean` | `false` |

## FAQ

### Property Description for `image-preview`

**1. Keyboard Shortcuts - `keyboard`**
Setting this property to `true` enables corresponding keyboard shortcuts based on the `actions-layout` settings.

- `esc`: Close preview
- `left`: Switch to the previous image
- `right`: Switch to the next image
- `up`: Zoom in on the image
- `down`: Zoom out on the image
- `space`: Restore to original size

**2. Default Scaling - `defaultScale`**
This property defines the default scaling factor for images. For instance, when set to 1.5, images will be enlarged by 1.5 times their original size by default.

**3. Scroll Zoom Rate - `zoomSate`**
The `zoomSate` property controls the scaling rate of images during scrolling. Taking 1.3 as an example, each scrolling action will result in an image zoom-in or zoom-out by a factor of 1.3.
