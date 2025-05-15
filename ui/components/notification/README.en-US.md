```yaml
meta:
  type: Component
  category: Feedback
title: Notification
description: Globally display notification reminders to convey information to users in a timely and effective manner.
```

@import ./**demo**/basic.md

@import ./**demo**/type.md

@import ./**demo**/position.md

@import ./**demo**/update_notification.md

@import ./**demo**/update_duration.md

@import ./**demo**/btn.md

@import ./**demo**/custom-close.md

@import ./**demo**/style.md

## API

### `<Notification>` Props

|Attribute|Description|Type|Default|
|---|---|---|---|
|type||`MessageType`|`'info'`|
|show-icon||`boolean`|`true`|
|closable||`boolean`|`false`|
|duration||`number`|`3000`|
|reset-on-update||`boolean`|`false`|

## zh-CN

### `Notification` 全局方法

`Notification` 提供的全局方法，可以通过以下三种方法使用：

1. 通过 `this.$notification` 调用
2. 在 Composition API 中，通过 `getCurrentInstance().appContext.config.globalProperties.$notification` 调用
3. 导入 `Notification`，通过 `Notification` 本身调用

当通过 `import` 方式使用时，组件没有办法获取当前的 Vue Context，如 i18n 或 route 等注入在 AppContext 上的内容无法在内部使用，需要在调用时手动传入 AppContext，或者为组件全局指定 AppContext

```ts
import { createApp } from 'vue';
import { Notification } from 'arco-next';

const app = createApp(App);
Notification._context = app._context;
```

---

## en-US

### `Notification` Global methods

The global methods provided by `Notification` can be used in the following three ways:

1. Called by `this.$notification`
2. In the Composition API, call `getCurrentInstance().appContext.config.globalProperties.$notification`
3. Import `Notification`, call through `Notification` itself

When used by import, the component has no way to obtain the current Vue Context. Content injected into the AppContext such as i18n or route cannot be used internally. You need to manually pass in the AppContext when calling, or specify the AppContext globally for the component.

```ts
import { createApp } from 'vue';
import { Notification } from 'arco-next';

const app = createApp(App);
Notification._context = app._context;
```

---

### NotificationMethod

|Parameter|Description|Type|Default|
|---|---|---|---|
|info **(required)**|Show info notification|`(config: string \| NotificationConfig, appContext?: AppContext) => NotificationReturn`|``|
|success **(required)**|Show success notification|`(config: string \| NotificationConfig, appContext?: AppContext) => NotificationReturn`|``|
|warning **(required)**|Show warning notification|`(config: string \| NotificationConfig, appContext?: AppContext) => NotificationReturn`|``|
|error **(required)**|Show error notification|`(config: string \| NotificationConfig, appContext?: AppContext) => NotificationReturn`|``|
|remove **(required)**|remove the notification for the corresponding `id`|`(id: string) => void`|``|
|clear **(required)**|Clear all notifications|`(position?: NotificationPosition) => void`|``|
