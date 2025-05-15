import { withInstall } from '../_utils/withInstall';
import _TimePicker from './time-picker.vue';

const TimePicker = withInstall(_TimePicker);

export type TimePickerInstance = InstanceType<typeof _TimePicker>;

export default TimePicker;
