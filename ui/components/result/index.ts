import { withInstall } from '../_utils/withInstall';
import _Result from './result.vue';

const Result = withInstall(_Result);

export type ResultInstance = InstanceType<typeof _Result>;

export default Result;
