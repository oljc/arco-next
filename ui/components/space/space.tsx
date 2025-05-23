import { computed, CSSProperties, defineComponent, PropType, Comment, Fragment, inject } from 'vue';
import { isArray, isNumber } from '../_utils/is';
import { getAllElements } from '../_utils/vue-utils';
import { getPrefixCls } from '../_utils/global-config';
import { configProviderInjectionKey } from '../config-provider/context';

type SpaceSize = number | 'mini' | 'small' | 'medium' | 'large';

export default defineComponent({
  name: 'Space',
  props: {
    /**
     * @zh 对齐方式
     * @en Alignment
     * @values 'start', 'end', 'center', 'baseline'
     */
    align: {
      type: String as PropType<'start' | 'end' | 'center' | 'baseline'>,
    },
    /**
     * @zh 间距方向
     * @en Spacing direction
     */
    direction: {
      type: String as PropType<'vertical' | 'horizontal'>,
      default: 'horizontal',
    },
    /**
     * @zh 间距大小，支持分别制定横向和竖向的间距
     * @en Spacing size, support for setting horizontal and vertical spacing separately
     */
    size: {
      type: [Number, String, Array] as PropType<
        number | 'mini' | 'small' | 'medium' | 'large' | [SpaceSize, SpaceSize]
      >,
      default: 'small',
    },
    /**
     * @zh 环绕类型的间距，用于折行的场景。
     * @en The spacing of the wrapping type, used in the scene of wrapping.
     */
    wrap: {
      type: Boolean,
    },
    /**
     * @zh 充满整行
     * @en fill the block
     * @version 2.11.0
     */
    fill: {
      type: Boolean,
    },
  },
  /**
   * @zh 设置分隔符
   * @en Set separator
   * @slot split
   */
  setup(props, { slots }) {
    const prefixCls = getPrefixCls('space');
    const configCtx = inject(configProviderInjectionKey, undefined);
    const rtl = computed(() => configCtx?.rtl ?? false);

    const mergedAlign = computed(
      () => props.align ?? (props.direction === 'horizontal' ? 'center' : ''),
    );

    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-${props.direction}`]: props.direction,
        [`${prefixCls}-align-${mergedAlign.value}`]: mergedAlign.value,
        [`${prefixCls}-wrap`]: props.wrap,
        [`${prefixCls}-fill`]: props.fill,
        [`${prefixCls}-rtl`]: rtl.value,
      },
    ]);

    function getSize(size: SpaceSize) {
      if (isNumber(size)) {
        return size;
      }
      switch (size) {
        case 'mini':
          return 4;
        case 'small':
          return 8;
        case 'medium':
          return 16;
        case 'large':
          return 24;
        default:
          return 8;
      }
    }

    const getSpaceStyle = computed(() => {
      const style: CSSProperties = {};
      const sizeArray = isArray(props.size) ? props.size : [props.size, props.size];
      const [colGap, rowGap] = sizeArray.map(getSize);

      style.columnGap = `${colGap}px`;
      style.rowGap = `${rowGap}px`;
      return style;
    });

    return () => {
      const children = getAllElements(slots.default?.(), true).filter(
        (item) => item.type !== Comment,
      );

      return (
        <div class={cls.value} style={getSpaceStyle.value}>
          {children.map((child, index) => {
            const shouldRenderSplit = slots.split && index > 0;
            return (
              <Fragment key={child.key ?? `item-${index}`}>
                {shouldRenderSplit && (
                  <div class={`${prefixCls}-item-split`}>{slots.split?.()}</div>
                )}
                <div class={`${prefixCls}-item`}>{child}</div>
              </Fragment>
            );
          })}
        </div>
      );
    };
  },
});
