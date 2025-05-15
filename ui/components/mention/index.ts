import { withInstall } from '../_utils/withInstall';
import _Mention from './mention';

const Mention = withInstall(_Mention);

export type MentionInstance = InstanceType<typeof _Mention>;

export default Mention;
