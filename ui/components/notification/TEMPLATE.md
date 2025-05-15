```yaml zh-CN
meta:
  type: 组件
  category: 反馈
title: 通知提醒框 Notification
description: 全局展示通知提醒，将信息及时有效的传达给用户。
```

```yaml en-US
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

%%API(notification.vue)%%

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

%%INTERFACE(interface.ts)%%
