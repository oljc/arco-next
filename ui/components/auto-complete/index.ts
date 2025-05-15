import { withInstall } from '../_utils/withInstall';
import _AutoComplete from './auto-complete';

const AutoComplete = withInstall(_AutoComplete);

export type AutoCompleteInstance = InstanceType<typeof _AutoComplete>;

export default AutoComplete;
