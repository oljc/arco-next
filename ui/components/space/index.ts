import { withInstall } from '../_utils/withInstall';
import _Space from './space';

const Space = withInstall(_Space);

export type SpaceInstance = InstanceType<typeof _Space>;

export default Space;
