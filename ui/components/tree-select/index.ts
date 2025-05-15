import { withInstall } from '../_utils/withInstall';
import _TreeSelect from './tree-select.vue';

const TreeSelect = withInstall(_TreeSelect);

export type TreeSelectInstance = InstanceType<typeof _TreeSelect>;

export default TreeSelect;
