```yaml
meta:
  type: Component
  category: Feedback
title: Message
description: Lightweight global feedback triggered by user actions.
```

@import ./**demo**/basic.md

@import ./**demo**/type.md

@import ./**demo**/icon.md

@import ./**demo**/position.md

@import ./**demo**/closeable.md

@import ./**demo**/update.md

## zh-CN

### `Message` 全局方法

Message提供的全局方法，可以通过以下三种方法使用：

1. 通过this.$message调用
2. 在Composition API中，通过getCurrentInstance().appContext.config.globalProperties.$message调用
3. 导入Message，通过Message本身调用

当通过 import 方式使用时，组件没有办法获取当前的 Vue Context，如 i18n 或 route 等注入在 AppContext 上的内容无法在内部使用，需要在调用时手动传入 AppContext，或者为组件全局指定 AppContext

```ts
import { createApp } from 'vue';
import { Message } from 'arco-next';

const app = createApp(App);
Message._context = app._context;
```

---

## en-US

### `Message` Global methods

The global methods provided by Message can be used in the following three ways:

1. Called by this.$message
2. In the Composition API, call getCurrentInstance().appContext.config.globalProperties.$message
3. Import Message and call it through Message itself

When used by import, the component has no way to obtain the current Vue Context. Content injected into the AppContext such as i18n or route cannot be used internally. You need to manually pass in the AppContext when calling, or specify the AppContext globally for the component.

```ts
import { createApp } from 'vue';
import { Message } from 'arco-next';

const app = createApp(App);
Message._context = app._context;
```

---

### MessageMethod

|Parameter|Description|Type|Default|Version|
|---|---|---|---|---|
|info **(required)**|Show info message|`(config: string \| MessageConfig, appContext?: AppContext) => MessageReturn`|``||
|success **(required)**|Show success message|`(config: string \| MessageConfig, appContext?: AppContext) => MessageReturn`|``||
|warning **(required)**|Show warning message|`(config: string \| MessageConfig, appContext?: AppContext) => MessageReturn`|``||
|error **(required)**|Show error message|`(config: string \| MessageConfig, appContext?: AppContext) => MessageReturn`|``||
|loading **(required)**|Show loading message|`(config: string \| MessageConfig, appContext?: AppContext) => MessageReturn`|``||
|normal **(required)**|Show message|`(config: string \| MessageConfig, appContext?: AppContext) => MessageReturn`|``|2.41.0|
|clear **(required)**|Clear all messages|`(position?: MessagePosition) => void`|``||
