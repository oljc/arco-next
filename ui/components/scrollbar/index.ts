import { withInstall } from '../_utils/withInstall';
import _Scrollbar from './scrollbar.vue';

const Scrollbar = withInstall(_Scrollbar);

export type ScrollbarInstance = InstanceType<typeof _Scrollbar>;
export type { ScrollbarProps } from './interface';

export default Scrollbar;
