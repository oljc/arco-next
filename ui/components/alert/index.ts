import { withInstall } from '../_utils/withInstall';
import _Alert from './alert.vue';

const Alert = withInstall(_Alert);

export type AlertInstance = InstanceType<typeof _Alert>;

export default Alert;
