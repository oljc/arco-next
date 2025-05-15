```yaml
meta:
  type: 组件
  category: 反馈
title: Modal 对话框
description: 在当前页面打开一个浮层，承载相关操作。
```

@import ./**demo**/basic.md

@import ./**demo**/async.md

@import ./**demo**/function.md

@import ./**demo**/notice.md

@import ./**demo**/width.md

@import ./**demo**/custom.md

@import ./**demo**/form.md

@import ./**demo**/draggable.md

@import ./**demo**/fullscreen.md

## API

### `<Modal>` Props

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|visible **(v-model)**|对话框是否可见|`boolean`|`-`||
|default-visible|对话框默认是否可见（非受控状态）|`boolean`|`false`||
|width|对话框的宽度，不设置的情况下会使用样式中的宽度值|`number\|string`|`-`|2.12.0|
|top|对话框的距离顶部的高度，居中显示开启的情况下不生效|`number\|string`|`-`|2.12.0|
|mask|是否显示遮罩层|`boolean`|`true`||
|title|标题|`string`|`-`||
|title-align|标题的水平对齐方向|`'start' \| 'center'`|`'center'`|2.17.0|
|align-center|对话框是否居中显示|`boolean`|`true`||
|unmount-on-close|关闭时是否卸载节点|`boolean`|`-`||
|mask-closable|是否点击遮罩层可以关闭对话框|`boolean`|`true`||
|hide-cancel|是否隐藏取消按钮|`boolean`|`false`||
|simple|是否开启简单模式|`boolean`|`(props: any) => {   return props.notice; }`||
|closable|是否显示关闭按钮|`boolean`|`true`||
|ok-text|确认按钮的内容|`string`|`-`||
|cancel-text|取消按钮的内容|`string`|`-`||
|ok-loading|确认按钮是否为加载中状态|`boolean`|`false`||
|ok-button-props|确认按钮的Props|`ButtonProps`|`-`||
|cancel-button-props|取消按钮的Props|`ButtonProps`|`-`||
|footer|是否展示页脚部分|`boolean`|`true`||
|render-to-body|对话框是否挂载在 `body` 元素下|`boolean`|`true`||
|popup-container|弹出框的挂载容器|`string \| HTMLElement`|`'body'`||
|mask-style|蒙层的样式|`CSSProperties`|`-`||
|modal-class|对话框的类名|`string \| any[]`|`-`||
|modal-style|对话框的样式|`CSSProperties`|`-`||
|on-before-ok|触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。|`(done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>`|`-`|2.7.0|
|on-before-cancel|触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。|`() => boolean`|`-`|2.7.0|
|esc-to-close|是否支持 ESC 键关闭对话框|`boolean`|`true`|2.15.0|
|draggable|是否支持拖动|`boolean`|`false`|2.19.0|
|fullscreen|是否开启全屏|`boolean`|`false`|2.19.0|
|mask-animation-name|遮罩层动画名字|`string`|`-`|2.24.0|
|modal-animation-name|对话框动画名字|`string`|`-`|2.24.0|
|body-class|对话框内容部分的类名|`string \| any[]`|`-`|2.31.0|
|body-style|对话框内容部分的样式|`StyleValue`|`-`|2.31.0|
|message-type||`MessageType`|`-`||
|hide-title|是否隐藏标题|`boolean`|`false`|2.50.0|

## zh-CN

### `<modal>` 全局方法

Modal提供的全局方法，可以通过以下三种方法使用：

1. 通过this.$modal调用
2. 在Composition API中，通过getCurrentInstance().appContext.config.globalProperties.$modal调用
3. 导入Modal，通过Modal本身调用

当通过 import 方式使用时，组件没有办法获取当前的 Vue Context，如 i18n 或 route 等注入在 AppContext 上的内容无法在内部使用，需要在调用时手动传入 AppContext，或者为组件全局指定 AppContext

```ts
import { createApp } from 'vue';
import { Modal } from 'arco-next';

const app = createApp(App);
Modal._context = app._context;
```

---

## en-US

### `<modal>` Global methods

The global methods provided by Modal can be used in the following three ways:

1. Called by this.$modal
2. In the Composition API, call through getCurrentInstance().appContext.config.globalProperties.$modal
3. Import Modal, call through Modal itself

When used by import, the component has no way to obtain the current Vue Context. Content injected into the AppContext such as i18n or route cannot be used internally. You need to manually pass in the AppContext when calling, or specify the AppContext globally for the component.

```ts
import { createApp } from 'vue';
import { Modal } from 'arco-next';

const app = createApp(App);
Modal._context = app._context;
```

---

### ModalConfig

|参数名|描述|类型|默认值|版本|
|---|---|---|---|---|
|title|标题|`RenderContent`|``||
|content **(必填)**|内容|`RenderContent`|``||
|footer|页脚|`boolean \| RenderContent`|`true`||
|closable|是否显示关闭按钮|`boolean`|`true`||
|okText|确认按钮的内容|`string`|``||
|cancelText|取消按钮的内容|`string`|``||
|okButtonProps|确认按钮的Props|`ButtonProps`|``||
|cancelButtonProps|取消按钮的Props|`ButtonProps`|``||
|okLoading|确认按钮是否为加载中状态|`boolean`|``||
|hideCancel|是否隐藏取消按钮|`boolean`|``||
|mask|是否显示遮罩层|`boolean`|`true`||
|simple|是否开启简单模式|`boolean`|``||
|maskClosable|是否点击遮罩层可以关闭对话框|`boolean`|`true`||
|maskStyle|蒙层的样式|`CSSProperties`|``||
|alignCenter|对话框是否居中显示|`boolean`|`true`||
|escToClose|是否支持 ESC 键关闭对话框|`boolean`|`true`|2.15.0|
|draggable|是否支持拖动|`boolean`|``|2.19.0|
|fullscreen|是否开启全屏|`boolean`|``|2.19.0|
|onOk|点击确定按钮的回调函数|`(e?: Event) => void`|``||
|onCancel|点击取消按钮的回调函数|`(e?: Event) => void`|``||
|onBeforeOk|触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。|`(done: (closed: boolean) => void) => void \| boolean \| Promise<void \| boolean>`|``|2.7.0|
|onBeforeCancel|触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。|`() => boolean`|``|2.7.0|
|onOpen|对话框打开后（动画结束）触发|`() => void`|``||
|onClose|对话框关闭后（动画结束）触发|`() => void`|``||
|onBeforeOpen|对话框打开前触发|`() => void`|``|2.16.0|
|onBeforeClose|对话框关闭前触发|`() => void`|``|2.16.0|
|width|对话框的宽度，不设置的情况下会使用样式中的宽度值|`number \| string`|``|2.12.0|
|top|对话框的距离顶部的高度，居中显示开启的情况下不生效|`number \| string`|``|2.12.0|
|titleAlign|标题的水平对齐方向|`'start' \| 'center'`|`'center'`|2.17.0|
|renderToBody|对话框是否挂载在 `body` 元素下|`boolean`|`true`||
|popupContainer|弹出框的挂载容器|`string \| HTMLElement`|`'body'`||
|modalClass|对话框的类名|`string \| any[]`|``||
|modalStyle|对话框的样式|`CSSProperties`|``||
|maskAnimationName|遮罩层动画名字|`string`|``|2.24.0|
|modalAnimationName|对话框动画名字|`string`|``|2.24.0|
|hideTitle|是否隐藏标题|`boolean`|`false`|2.50.0|
|bodyClass|对话框内容部分的类名|`string \| any[]`|``||
|bodyStyle|对话框内容部分的样式|`StyleValue`|``||
