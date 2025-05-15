import { withInstall } from '../_utils/withInstall';
import _InputNumber from './input-number';

const InputNumber = withInstall(_InputNumber);

export type InputNumberInstance = InstanceType<typeof _InputNumber>;

export default InputNumber;
