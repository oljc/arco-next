import { withInstall } from '../_utils/withInstall';
import _Trigger from './trigger';

const Trigger = withInstall(_Trigger);

export type TriggerInstance = InstanceType<typeof _Trigger>;
export type { TriggerEvent, TriggerPosition } from '../_utils/constant';
export type { TriggerProps, TriggerPopupTranslate } from './interface';

export default Trigger;
