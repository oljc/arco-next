import { withInstall } from '../_utils/withInstall';
import _Radio from './radio';
import _RadioGroup from './radio-group';

const Radio = withInstall(_Radio, {
  Group: _RadioGroup,
});

export type RadioInstance = InstanceType<typeof _Radio>;
export type RadioGroupInstance = InstanceType<typeof _RadioGroup>;

export { _RadioGroup as RadioGroup };

export default Radio;
