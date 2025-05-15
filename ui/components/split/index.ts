import { withInstall } from '../_utils/withInstall';
import _Split from './split.vue';

const Split = withInstall(_Split);

export type SplitInstance = InstanceType<typeof _Split>;

export default Split;
