import { withInstall } from '../_utils/withInstall';
import _Rate from './rate';

const Rate = withInstall(_Rate);

export type RateInstance = InstanceType<typeof _Rate>;

export default Rate;
