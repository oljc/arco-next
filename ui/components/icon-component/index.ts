import { withInstall } from '../_utils/withInstall';
import _Icon from './icon.vue';
import { addFromIconFontCn } from './add-from-icon-font-cn';

const Icon = withInstall(_Icon, {
  addFromIconFontCn,
});

export type IconInstance = InstanceType<typeof _Icon>;
export type IconProps = IconInstance['$props'];

export default Icon;
