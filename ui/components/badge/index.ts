import { withInstall } from '../_utils/withInstall';
import _Badge from './badge';

const Badge = withInstall(_Badge);

export type BadgeInstance = InstanceType<typeof _Badge>;

export default Badge;
