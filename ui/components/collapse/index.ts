import { withInstall } from '../_utils/withInstall';
import _Collapse from './collapse.vue';
import _CollapseItem from './collapse-item';

const Collapse = withInstall(_Collapse, { Item: _CollapseItem });

export type CollapseInstance = InstanceType<typeof _Collapse>;
export type CollapseItemInstance = InstanceType<typeof _CollapseItem>;

export { _CollapseItem as CollapseItem };

export default Collapse;
