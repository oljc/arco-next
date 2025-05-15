import { withInstall } from '../_utils/withInstall';
import _ColorPicker from './color-picker';

const ColorPicker = withInstall(_ColorPicker);

export type { RGB, HSV, Color } from './interface';
export type ColorPickerInstance = InstanceType<typeof _ColorPicker>;

export default ColorPicker;
