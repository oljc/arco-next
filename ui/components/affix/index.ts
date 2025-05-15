import { withInstall } from '../_utils/withInstall';
import _Affix from './affix.vue';

const Affix = withInstall(_Affix);

export type AffixInstance = InstanceType<typeof _Affix>;

export default Affix;
