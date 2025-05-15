import { withInstall } from '../_utils/withInstall';
import _Tooltip from './tooltip.vue';

const Tooltip = withInstall(_Tooltip);

export type TooltipInstance = InstanceType<typeof _Tooltip>;

export default Tooltip;
