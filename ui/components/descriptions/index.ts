import { withInstall } from '../_utils/withInstall';
import _Descriptions from './descriptions';
import DescriptionsItem from './descriptions-item.vue';

const Descriptions = withInstall(_Descriptions, { DescriptionsItem });

export type DescriptionsInstance = InstanceType<typeof _Descriptions>;
export type DescriptionsItemInstance = InstanceType<typeof DescriptionsItem>;
export type { DescData } from './interface';

export { DescriptionsItem };

export default Descriptions;
