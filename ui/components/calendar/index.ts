import { withInstall } from '../_utils/withInstall';
import _Calendar from './calendar';

const Calendar = withInstall(_Calendar);

export type CalendarInstance = InstanceType<typeof _Calendar>;

export default Calendar;
