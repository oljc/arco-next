import { withInstall } from '../_utils/withInstall';
import _List from './list';
import _ListItem from './list-item';
import _ListItemMeta from './list-item-meta.vue';

const List = withInstall(_List, {
  Item: Object.assign(_ListItem, {
    Meta: _ListItemMeta,
  }),
  ItemMeta: _ListItemMeta,
});

export type ListInstance = InstanceType<typeof _List>;
export type ListItemInstance = InstanceType<typeof _ListItem>;
export type ListItemMetaInstance = InstanceType<typeof _ListItemMeta>;

export { _ListItem as ListItem, _ListItemMeta as ListItemMeta };

export default List;
