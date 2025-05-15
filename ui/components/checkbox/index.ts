import { withInstall } from '../_utils/withInstall';
import _Checkbox from './checkbox';
import _CheckboxGroup from './checkbox-group';

const Checkbox = withInstall(_Checkbox, { Group: _CheckboxGroup });

export type CheckboxInstance = InstanceType<typeof _Checkbox>;
export type CheckboxGroupInstance = InstanceType<typeof _CheckboxGroup>;
export type { CheckboxOption } from './interface';

export { _CheckboxGroup as CheckboxGroup };

export default Checkbox;
