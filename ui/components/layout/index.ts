import { withInstall } from '../_utils/withInstall';
import _Layout from './layout.vue';
import _LayoutHeader from './header.vue';
import _LayoutContent from './content.vue';
import _LayoutFooter from './footer.vue';
import _LayoutSider from './sider.vue';

const Layout = withInstall(_Layout, {
  Header: _LayoutHeader,
  Content: _LayoutContent,
  Footer: _LayoutFooter,
  Sider: _LayoutSider,
});

export type LayoutInstance = InstanceType<typeof _Layout>;
export type LayoutHeaderInstance = InstanceType<typeof _LayoutHeader>;
export type LayoutContentInstance = InstanceType<typeof _LayoutContent>;
export type LayoutFooterInstance = InstanceType<typeof _LayoutFooter>;
export type LayoutSiderInstance = InstanceType<typeof _LayoutSider>;

export type { LayoutProps, SiderProps } from './interface';

export {
  _LayoutHeader as LayoutHeader,
  _LayoutContent as LayoutContent,
  _LayoutFooter as LayoutFooter,
  _LayoutSider as LayoutSider,
};

export default Layout;
