import { withInstall } from '../_utils/withInstall';
import _Select from './select';
import _Option from './option.vue';
import _Optgroup from './optgroup.vue';

const Select = withInstall(_Select, {
  Option: _Option,
  OptGroup: _Optgroup,
});

export type SelectInstance = InstanceType<typeof _Select>;
export type SelectOptionInstance = InstanceType<typeof _Option>;
export type SelectOptGroupInstance = InstanceType<typeof _Optgroup>;
export type {
  SelectProps,
  SelectOption,
  SelectOptionData,
  SelectOptionGroup,
  SelectFieldNames,
  FilterOption,
} from './interface';

export { _Option as Option, _Optgroup as Optgroup };

export default Select;
