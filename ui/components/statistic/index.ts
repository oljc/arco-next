import { withInstall } from '../_utils/withInstall';
import _Statistic from './statistic.vue';
import _Countdown from './countdown.vue';

const Statistic = withInstall(_Statistic, {
  Countdown: _Countdown,
});

export type StatisticInstance = InstanceType<typeof _Statistic>;
export type CountdownInstance = InstanceType<typeof _Countdown>;

export { _Countdown as Countdown };

export default Statistic;
