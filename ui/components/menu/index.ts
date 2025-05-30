import { withInstall } from '../_utils/withInstall';
import _Menu from './menu';
import _MenuItem from './item';
import _MenuItemGroup from './item-group.vue';
import _MenuSubMenu from './sub-menu';

const Menu = withInstall(_Menu, {
  Item: _MenuItem,
  ItemGroup: _MenuItemGroup,
  SubMenu: _MenuSubMenu,
});

export type MenuInstance = InstanceType<typeof _Menu>;
export type MenuItemInstance = InstanceType<typeof _MenuItem>;
export type MenuItemGroupInstance = InstanceType<typeof _MenuItemGroup>;
export type MenuSubMenuInstance = InstanceType<typeof _MenuSubMenu>;

export { _MenuItem as MenuItem, _MenuItemGroup as MenuItemGroup, _MenuSubMenu as SubMenu };

export default Menu;
