import { withInstall } from '../_utils/withInstall';
import _Carousel from './carousel';
import _CarouselItem from './carousel-item.vue';

const Carousel = withInstall(_Carousel, { Item: _CarouselItem });

export type CarouselInstance = InstanceType<typeof _Carousel>;
export type CarouselItemInstance = InstanceType<typeof _CarouselItem>;

export { _CarouselItem as CarouselItem };

export default Carousel;
