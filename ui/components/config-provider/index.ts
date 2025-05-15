import { withInstall } from '../_utils/withInstall';
import _ConfigProvider from './config-provider.vue';

const ConfigProvider = withInstall(_ConfigProvider);

export type ConfigProviderInstance = InstanceType<typeof _ConfigProvider>;

export default ConfigProvider;
