import { withInstall } from '../_utils/withInstall';
import _Tree from './tree.vue';

const Tree = withInstall(_Tree);

export type TreeInstance = InstanceType<typeof _Tree>;
export type { TreeNodeData, TreeFieldNames } from './interface';

export default Tree;
