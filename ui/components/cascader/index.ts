import { withInstall } from '../_utils/withInstall';
import _Cascader from './cascader.vue';
import _CascaderPanel from './cascader-panel.vue';

const Cascader = withInstall(_Cascader, { CascaderPanel: _CascaderPanel });

export type CascaderInstance = InstanceType<typeof _Cascader>;
export type CascaderPanelInstance = InstanceType<typeof _CascaderPanel>;
export type { CascaderOption, CascaderFieldNames } from './interface';

export { _CascaderPanel as CascaderPanel };
export default Cascader;
