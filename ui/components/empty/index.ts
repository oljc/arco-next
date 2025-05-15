import { withInstall } from '../_utils/withInstall';
import _Empty from './empty';

const Empty = withInstall(_Empty);

export type EmptyInstance = InstanceType<typeof _Empty>;

export default Empty;
