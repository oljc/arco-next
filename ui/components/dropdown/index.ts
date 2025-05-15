import { withInstall } from '../_utils/withInstall';
import _Dropdown from './dropdown.vue';
import DropdownOption from './dropdown-option.vue';
import DropdownGroup from './dropdown-group.vue';
import DropdownSubmenu from './dropdown-submenu.vue';
import DropdownButton from './dropdown-button.vue';

const Dropdown = withInstall(_Dropdown, {
  Option: DropdownOption,
  Group: DropdownGroup,
  Submenu: DropdownSubmenu,
  Button: DropdownButton,
});

export type DropdownInstance = InstanceType<typeof _Dropdown>;
export type DropdownOptionInstance = InstanceType<typeof DropdownOption>;
export type DropdownGroupInstance = InstanceType<typeof DropdownGroup>;
export type DropdownSubmenuInstance = InstanceType<typeof DropdownSubmenu>;
export type DropdownButtonInstance = InstanceType<typeof DropdownButton>;
export type { DropDownProps, DropdownOption, DOption, DGroup, DSubmenu } from './interface';

export {
  DropdownOption as Doption,
  DropdownGroup as Dgroup,
  DropdownSubmenu as Dsubmenu,
  DropdownButton,
};

export default Dropdown;
