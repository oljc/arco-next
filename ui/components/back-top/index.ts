import { withInstall } from '../_utils/withInstall';
import _BackTop from './back-top.vue';

const BackTop = withInstall(_BackTop);

export type BackTopInstance = InstanceType<typeof _BackTop>;

export default BackTop;
