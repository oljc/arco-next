import { withInstall } from '../_utils/withInstall';
import _Steps from './steps.vue';
import _StepsStep from './step.vue';

const Steps = withInstall(_Steps, {
  Step: _StepsStep,
});

export type StepsInstance = InstanceType<typeof _Steps>;
export type StepsStepInstance = InstanceType<typeof _StepsStep>;

export { _StepsStep as Step };

export default Steps;
