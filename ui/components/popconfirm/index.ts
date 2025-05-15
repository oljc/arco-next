import { withInstall } from '../_utils/withInstall';
import _Popconfirm from './popconfirm.vue';

const Popconfirm = withInstall(_Popconfirm);

export type PopconfirmInstance = InstanceType<typeof _Popconfirm>;

export default Popconfirm;
