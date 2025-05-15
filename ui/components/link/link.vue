<template>
  <a :href="disabled ? undefined : href" :class="cls" @click="handleClick">
    <span v-if="loading || showIcon" :class="`${prefixCls}-icon`">
      <icon-loading v-if="loading" />
      <slot v-else name="icon">
        <icon-link />
      </slot>
    </span>
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed, PropType, useSlots } from 'vue';
import { getPrefixCls } from '../_utils/global-config';
import { Status } from '../_utils/constant';
import { hasPropOrSlot } from '../_utils/use-prop-or-slot';
import IconLink from '../icon/icon-link';
import IconLoading from '../icon/icon-loading';

defineOptions({
  name: 'Link',
});

const props = defineProps({
  /**
   * @zh 链接地址
   * @en Link address
   */
  href: String,
  /**
   * @zh 链接的状态
   * @en Link status
   * @values 'normal','warning','success','danger'
   */
  status: {
    type: String as PropType<Status>,
    default: 'normal',
  },
  /**
   * @zh 鼠标悬浮时存在底色
   * @en Whether to hide background when hover
   * @defaultValue true
   * @version 2.7.0
   */
  hoverable: {
    type: Boolean,
    default: true,
  },
  /**
   * @zh 图标
   * @en icon
   * @version 2.7.0
   */
  icon: Boolean,
  /**
   * @zh 链接是否为加载中状态
   * @en Whether the link is in the loading state
   * @version 2.37.0
   */
  loading: Boolean,
  /**
   * @zh 链接是否禁用
   * @en Whether the link is disabled
   */
  disabled: Boolean,
});

const emit = defineEmits<{
  /**
   * @zh 点击时触发
   * @en Emitted when the link is clicked
   */
  (e: 'click', ev: MouseEvent): void;
  /**
   * @zh 用户点击链接时触发
   * @en Triggered when the user clicks on the link
   */
  (e: 'select', hash: string | undefined, preHash: string): void;
}>();

const prefixCls = getPrefixCls('link');
const slots = useSlots();
const showIcon = hasPropOrSlot(props, slots, 'icon');

const handleClick = (ev: MouseEvent) => {
  if (props.disabled || props.loading) {
    ev.preventDefault();
    return;
  }
  emit('click', ev);
};

const cls = computed(() => [
  prefixCls,
  `${prefixCls}-status-${props.status}`,
  {
    [`${prefixCls}-disabled`]: props.disabled,
    [`${prefixCls}-loading`]: props.loading,
    [`${prefixCls}-hoverless`]: !props.hoverable,
    [`${prefixCls}-with-icon`]: props.loading || showIcon.value,
  },
]);
</script>
