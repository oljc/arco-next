import { withInstall } from '../_utils/withInstall';
import _DatePicker from './pickers/date-picker';
import WeekPicker from './pickers/week-picker';
import MonthPicker from './pickers/month-picker';
import YearPicker from './pickers/year-picker';
import QuarterPicker from './pickers/quarter-picker';
import RangePicker from './range-picker.vue';

const DatePicker = withInstall(_DatePicker, {
  WeekPicker,
  MonthPicker,
  YearPicker,
  QuarterPicker,
  RangePicker,
});

export type DatePickerInstance = InstanceType<typeof _DatePicker>;
export type WeekPickerInstance = InstanceType<typeof WeekPicker>;
export type MonthPickerInstance = InstanceType<typeof MonthPicker>;
export type YearPickerInstance = InstanceType<typeof YearPicker>;
export type QuarterPickerInstance = InstanceType<typeof QuarterPicker>;
export type RangePickerInstance = InstanceType<typeof RangePicker>;
export type { ShortcutType } from './interface';

export { WeekPicker, MonthPicker, YearPicker, QuarterPicker, RangePicker };

export default DatePicker;
