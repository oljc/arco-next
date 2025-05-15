```yaml
meta:
  type: 组件
  category: 数据输入
title: 上传 Upload
description: 用户可传输文件或提交相应的内容。
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

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|file-list **(v-model)**|文件列表|`FileItem[]`|`-`||
|default-file-list|默认的文件列表（非受控状态）|`FileItem[]`|`[]`||
|accept|接收的上传文件类型，具体参考 [HTML标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#htmlattrdefaccept "_blank")|`string`|`-`||
|action|上传的URL|`string`|`-`||
|disabled|是否禁用|`boolean`|`false`||
|multiple|是否支持多文件上传|`boolean`|`false`||
|directory|是否支持文件夹上传（需要浏览器支持）|`boolean`|`false`||
|draggable|是否支持拖拽上传|`boolean`|`false`||
|tip|提示文字|`string`|`-`||
|headers|上传请求附加的头信息|`Record<string, string>`|`-`||
|data|上传请求附加的数据|`Record<string, string \| Blob> \| ((fileItem: FileItem) => Record<string, string \| Blob>)`|`-`||
|name|上传的文件名|`string \| ((fileItem: FileItem) => string)`|`-`||
|with-credentials|上传请求是否携带 cookie|`boolean`|`false`||
|custom-request|自定义上传行为|`(option: RequestOption) => UploadRequest`|`-`||
|limit|限制上传文件的数量。`0`表示不限制|`number`|`0`||
|auto-upload|是否自动上传文件|`boolean`|`true`||
|show-file-list|是否显示文件列表|`boolean`|`true`||
|show-remove-button|是否显示删除按钮|`boolean`|`true`|2.11.0|
|show-retry-button|是否显示重试按钮|`boolean`|`true`|2.11.0|
|show-cancel-button|是否显示取消按钮|`boolean`|`true`|2.11.0|
|show-upload-button|是否显示上传按钮。2.14.0 版本新增 `showOnExceedLimit` 支持|`boolean \| { showOnExceedLimit: boolean }`|`true`|2.11.0|
|show-preview-button|照片墙是否显示预览按钮|`boolean`|`true`|2.42.0|
|download|是否在 `<a>` 链接上添加 download 属性|`boolean`|`false`|2.11.0|
|show-link|在列表模式下，如果上传的文件存在 URL 则展示链接。如果关闭仅展示文字并且点击可以触发 `preview` 事件。|`boolean`|`true`|2.13.0|
|image-loading|`<img>` 的原生 HTML 属性，需要浏览器支持|`'eager' \| 'lazy'`|`-`|2.11.0|
|list-type|图片列表类型|`'text' \| 'picture' \| 'picture-card'`|`'text'`||
|response-url-key|Response中获取图片URL的key，开启后会用上传的图片替换预加载的图片|`string \| ((fileItem: FileItem) => string)`|`-`||
|custom-icon|自定义图标|`CustomIcon`|`-`||
|image-preview|是否使用 ImagePreview 组件进行预览|`boolean`|`false`|2.14.0|
|on-before-upload|上传文件前触发|`(file: File) => boolean \| Promise<boolean \| File>`|`-`||
|on-before-remove|移除文件前触发|`(fileItem: FileItem) => Promise<boolean>`|`-`||
|on-button-click|点击上传按钮触发（如果返回 Promise 则会关闭默认 input 上传）|`(event: Event) => Promise<FileList> \| void`|`-`||

### FileItem

|参数名|描述|类型|默认值|
|---|---|---|---|
|uid **(必填)**|当前上传文件的唯一标示|`string`|``|
|status|当前上传文件的状态|`FileStatus`|``|
|file|文件对象|`File`|``|
|percent|上传进度百分比|`number`|``|
|response|当前文件上传请求返回的响应|`any`|``|
|url|文件地址|`string`|``|
|name|文件名|`string`|``|