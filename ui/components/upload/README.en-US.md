```yaml
meta:
  type: Component
  category: Data Entry
title: Upload
description: Users can transfer files or submit corresponding content.
```

@import ./**demo**/basic.md

@import ./**demo**/avatar.md

@import ./**demo**/upload-list.md

@import ./**demo**/picture-card.md

@import ./**demo**/draggable.md

@import ./**demo**/picture-list.md

@import ./**demo**/submit.md

@import ./**demo**/before-upload.md

@import ./**demo**/before-remove.md

@import ./**demo**/limit.md

@import ./**demo**/custom-button.md

@import ./**demo**/custom-icon.md

@import ./**demo**/request.md

@import ./**demo**/directory.md

## API

### `<Upload>` Props

|Attribute|Description|Type|Default|Version|
|---|---|---|---|---|
|file-list **(v-model)**|File List|`FileItem[]`|`-`||
|default-file-list|Default file list (uncontrolled state)|`FileItem[]`|`[]`||
|accept|For the received upload file type, please refer to [HTML standard](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#htmlattrdefaccept "_blank")|`string`|`-`||
|action|Uploaded URL|`string`|`-`||
|disabled|Whether to disable|`boolean`|`false`||
|multiple|Whether to support multiple file upload|`boolean`|`false`||
|directory|Whether to support folder upload (requires browser support)|`boolean`|`false`||
|draggable|Whether to support drag and drop upload|`boolean`|`false`||
|tip|Prompt text|`string`|`-`||
|headers|Additional header information for upload request|`Record<string, string>`|`-`||
|data|Upload request additional data|`Record<string, string \| Blob> \| ((fileItem: FileItem) => Record<string, string \| Blob>)`|`-`||
|name|Uploaded file name|`string \| ((fileItem: FileItem) => string)`|`-`||
|with-credentials|Whether the upload request carries cookies|`boolean`|`false`||
|custom-request|Custom upload behavior|`(option: RequestOption) => UploadRequest`|`-`||
|limit|Limit the number of uploaded files. `0` means no limit|`number`|`0`||
|auto-upload|Whether to upload files automatically|`boolean`|`true`||
|show-file-list|Whether to display the file list|`boolean`|`true`||
|show-remove-button|Whether to display the remove button|`boolean`|`true`|2.11.0|
|show-retry-button|Whether to display the retry button|`boolean`|`true`|2.11.0|
|show-cancel-button|Whether to display the cancel button|`boolean`|`true`|2.11.0|
|show-upload-button|Whether to display the retry button. Added `showOnExceedLimit` support in version 2.14.0|`boolean \| { showOnExceedLimit: boolean }`|`true`|2.11.0|
|show-preview-button|Whether to display the preview button in picture-card|`boolean`|`true`|2.42.0|
|download|Whether to add download attribute to `<a>` link|`boolean`|`false`|2.11.0|
|show-link|In the list mode, if the uploaded file has a URL, the link will be displayed. If you turn off only display text and click to trigger the `preview` event.|`boolean`|`true`|2.13.0|
|image-loading|Native HTML attributes of `<img>`, browser support is required|`'eager' \| 'lazy'`|`-`|2.11.0|
|list-type|Picture list type|`'text' \| 'picture' \| 'picture-card'`|`'text'`||
|response-url-key|Get the key of the image URL in the Response. After opening, it will replace the pre-load image with the uploaded image|`string \| ((fileItem: FileItem) => string)`|`-`||
|custom-icon|Custom icon|`CustomIcon`|`-`||
|image-preview||`boolean`|`false`|2.14.0|
|on-before-upload|Trigger before uploading a file|`(file: File) => boolean \| Promise<boolean \| File>`|`-`||
|on-before-remove|Triggered before removing the file|`(fileItem: FileItem) => Promise<boolean>`|`-`||
|on-button-click|Click the upload button to trigger (if the Promise is returned, the default input upload will be closed)|`(event: Event) => Promise<FileList> \| void`|`-`||

### FileItem

|Parameter|Description|Type|Default|
|---|---|---|---|
|uid **(required)**|The unique identifier of the currently uploaded file|`string`|``|
|status|The status of the currently uploaded file|`FileStatus`|``|
|file|File object|`File`|``|
|percent|Upload progress percentage|`number`|``|
|response|The response returned by the current file upload request|`any`|``|
|url|The file address|`string`|``|
|name|The file name|`string`|``|