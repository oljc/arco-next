import { withInstall } from '../_utils/withInstall';
import _Tag from './tag.vue';

const Tag = withInstall(_Tag);

export type TagInstance = InstanceType<typeof _Tag>;
export type { TagProps, TagColor } from './interface';

export default Tag;
