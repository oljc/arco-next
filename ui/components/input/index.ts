import { withInstall } from '../_utils/withInstall';
import _Input from './input';
import _InputSearch from './input-search';
import _InputPassword from './input-password.vue';
import _InputGroup from './input-group.vue';

const Input = withInstall(_Input, {
  Search: _InputSearch,
  Password: _InputPassword,
  Group: _InputGroup,
});

export type InputInstance = InstanceType<typeof _Input>;
export type InputSearchInstance = InstanceType<typeof _InputSearch>;
export type InputPasswordInstance = InstanceType<typeof _InputPassword>;
export type InputGroupInstance = InstanceType<typeof _InputGroup>;

export { _InputSearch as InputSearch, _InputPassword as InputPassword, _InputGroup as InputGroup };

export default Input;
