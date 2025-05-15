import { withInstall } from '../_utils/withInstall';
import _Tabs from './tabs';
import _TabPane from './tab-pane.vue';

const Tabs = withInstall(_Tabs, {
  TabPane: _TabPane,
});

export type TabsInstance = InstanceType<typeof _Tabs>;
export type TabPaneInstance = InstanceType<typeof _TabPane>;

export { _TabPane as TabPane };

export default Tabs;
