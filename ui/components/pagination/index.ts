import { withInstall } from '../_utils/withInstall';
import _Pagination from './pagination';

const Pagination = withInstall(_Pagination);

export type PaginationInstance = InstanceType<typeof _Pagination>;
export type { PaginationProps } from './interface';

export default Pagination;
