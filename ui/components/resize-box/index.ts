import { withInstall } from '../_utils/withInstall';
import _ResizeBox from './resize-box.vue';

const ResizeBox = withInstall(_ResizeBox);

export type ResizeBoxInstance = InstanceType<typeof _ResizeBox>;

export default ResizeBox;
