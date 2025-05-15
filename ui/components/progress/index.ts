import { withInstall } from '../_utils/withInstall';
import _Progress from './progress.vue';

const Progress = withInstall(_Progress);

export type ProgressInstance = InstanceType<typeof _Progress>;

export default Progress;
