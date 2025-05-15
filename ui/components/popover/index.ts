import { withInstall } from '../_utils/withInstall';
import _Popover from './popover.vue';

const Popover = withInstall(_Popover);

export type PopoverInstance = InstanceType<typeof _Popover>;

export default Popover;
