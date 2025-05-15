import { withInstall } from '../_utils/withInstall';
import _Breadcrumb from './breadcrumb';
import _BreadcrumbItem from './breadcrumb-item';

const Breadcrumb = withInstall(_Breadcrumb, { Item: _BreadcrumbItem });

export type BreadcrumbInstance = InstanceType<typeof _Breadcrumb>;
export type BreadcrumbItemInstance = InstanceType<typeof _BreadcrumbItem>;
export type { BreadcrumbRoute } from './interface';

export { _BreadcrumbItem as BreadcrumbItem };

export default Breadcrumb;
