import { withInstall } from '../_utils/withInstall';
import _Button from './button.vue';
import _ButtonGroup from './button-group.vue';

const Button = withInstall(_Button, { Group: _ButtonGroup });

export type ButtonInstance = InstanceType<typeof _Button>;
export type ButtonGroupInstance = InstanceType<typeof _ButtonGroup>;
export type { ButtonProps } from './interface';

export { _ButtonGroup as ButtonGroup };

export default Button;
