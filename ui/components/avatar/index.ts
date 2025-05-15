import { withInstall } from '../_utils/withInstall';
import _Avatar from './avatar.vue';
import AvatarGroup from './avatar-group';

const Avatar = withInstall(_Avatar, { Group: AvatarGroup });

export type AvatarInstance = InstanceType<typeof _Avatar>;
export type AvatarGroupInstance = InstanceType<typeof AvatarGroup>;

export { AvatarGroup };

export default Avatar;
