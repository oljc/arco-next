import { withInstall } from '../_utils/withInstall';
import _Spin from './spin';

const Spin = withInstall(_Spin);

export type SpinInstance = InstanceType<typeof _Spin>;

export default Spin;
