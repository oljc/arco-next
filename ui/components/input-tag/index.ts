import { withInstall } from '../_utils/withInstall';
import _InputTag from './input-tag';

const InputTag = withInstall(_InputTag);

export type InputTagInstance = InstanceType<typeof _InputTag>;
export type { TagData, InputTagFieldNames } from './interface';

export default InputTag;
