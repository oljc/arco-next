import { withInstall } from '../_utils/withInstall';
import _Comment from './comment.vue';

const Comment = withInstall(_Comment);

export type CommentInstance = InstanceType<typeof _Comment>;

export default Comment;
