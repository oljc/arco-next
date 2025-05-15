import { withInstall } from '../_utils/withInstall';
import _Transfer from './transfer.vue';

const Transfer = withInstall(_Transfer);

export type TransferInstance = InstanceType<typeof _Transfer>;

export default Transfer;
