import { withInstall } from '../_utils/withInstall';
import _OverflowList from './overflow-list';

const OverflowList = withInstall(_OverflowList);

export type OverflowListInstance = InstanceType<typeof _OverflowList>;

export default OverflowList;
