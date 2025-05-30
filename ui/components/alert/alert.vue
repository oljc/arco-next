<template>
  <transition name="zoom-in-top" @after-leave="handleAfterLeave">
    <div v-if="visible" role="alert" :class="cls">
      <div v-if="showIcon && !(type === 'normal' && !$slots.icon)" :class="`${prefixCls}-icon`">
        <slot name="icon">
          <icon-info-circle-fill v-if="type === 'info'" />
          <icon-check-circle-fill v-else-if="type === 'success'" />
          <icon-exclamation-circle-fill v-else-if="type === 'warning'" />
          <icon-close-circle-fill v-else-if="type === 'error'" />
        </slot>
      </div>
      <div :class="`${prefixCls}-body`">
        <div v-if="title || $slots.title" :class="`${prefixCls}-title`">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        <div :class="`${prefixCls}-content`">
          <slot />
        </div>
      </div>
      <div v-if="$slots.action" :class="`${prefixCls}-action`">
        <slot name="action" />
      </div>
      <div
        v-if="closable"
        tabindex="-1"
        role="button"
        aria-label="Close"
        :class="`${prefixCls}-close-btn`"
        @click="handleClose"
      >
        <slot name="close-element">
          <icon-hover>
            <icon-close />
          </icon-hover>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue';
import type { PropType } from 'vue';
import { getPrefixCls } from '../_utils/global-config';
import { MessageType } from '../_utils/constant';
import IconHover from '../_components/icon-hover.vue';
import IconClose from '../icon/icon-close';
import IconInfoCircleFill from '../icon/icon-info-circle-fill';
import IconCheckCircleFill from '../icon/icon-check-circle-fill';
import IconExclamationCircleFill from '../icon/icon-exclamation-circle-fill';
import IconCloseCircleFill from '../icon/icon-close-circle-fill';

defineOptions({
  name: 'Alert',
});

/**
 * @zh 标题
 * @en Title
 */
defineSlots<{
  title?: () => any;
  /**
   * @zh 图标
   * @en Icon
   */
  icon?: () => any;
  /**
   * @zh 操作项
   * @en Actions
   */
  action?: () => any;
  /**
   * @zh 关闭元素
   * @en Close element
   * @version 2.36.0
   */
  'close-element'?: () => any;
  default?: () => any;
}>();

const props = defineProps({
  /**
   * @zh 警告提示的类型。2.41.0 新增 `normal` 类型
   * @en Type of the alert. 2.41.0 Added `normal` type
   * @values info, success, warning, error, normal
   */
  type: {
    type: String as PropType<MessageType | 'normal'>,
    default: 'info',
  },
  /**
   * @zh 是否展示图标
   * @en Whether to show the icon
   */
  showIcon: {
    type: Boolean,
    default: true,
  },
  /**
   * @zh 是否展示关闭按钮
   * @en Whether to show the close button
   */
  closable: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 警告提示的标题
   * @en The title of the alert
   */
  title: String,
  /**
   * @zh 是否作为顶部公告使用（去除边框和圆角）
   * @en Whether to use as the top announcement (remove the border and rounded corners)
   */
  banner: {
    type: Boolean,
    default: false,
  },
  /**
   * @zh 内容是否居中显示
   * @en Whether the content is displayed in the center
   */
  center: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  /**
   * @zh 点击关闭按钮时触发
   * @en Triggered when the close button is clicked
   */
  (e: 'close', ev: MouseEvent): void;
  /**
   * @zh 关闭动画结束后触发
   * @en Triggered after the close animation ends
   */
  (e: 'afterClose'): void;
}>();

const prefixCls = getPrefixCls('alert');
const visible = ref(true);
const slots = useSlots();

const cls = computed(() => [
  prefixCls,
  `${prefixCls}-${props.type}`,
  {
    [`${prefixCls}-with-title`]: Boolean(props.title || !!slots.title),
    [`${prefixCls}-banner`]: props.banner,
    [`${prefixCls}-center`]: props.center,
  },
]);

const handleClose = (ev: MouseEvent) => {
  visible.value = false;
  emit('close', ev);
};

const handleAfterLeave = () => {
  emit('afterClose');
};
</script>
