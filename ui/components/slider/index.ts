import { withInstall } from '../_utils/withInstall';
import _Slider from './slider.vue';

const Slider = withInstall(_Slider);

export type SliderInstance = InstanceType<typeof _Slider>;

export default Slider;
