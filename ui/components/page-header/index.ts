import { withInstall } from '../_utils/withInstall';
import _PageHeader from './page-header.vue';

const PageHeader = withInstall(_PageHeader);

export type PageHeaderInstance = InstanceType<typeof _PageHeader>;

export default PageHeader;
