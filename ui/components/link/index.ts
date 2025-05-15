import { withInstall } from '../_utils/withInstall';
import _Link from './link.vue';

const Link = withInstall(_Link);

export type LinkInstance = InstanceType<typeof _Link>;

export default Link;
