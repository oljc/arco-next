import { withInstall } from '../_utils/withInstall';
import _Skeleton from './skeleton.vue';
import _SkeletonLine from './line.vue';
import _SkeletonShape from './shape.vue';

const Skeleton = withInstall(_Skeleton, {
  Line: _SkeletonLine,
  Shape: _SkeletonShape,
});

export type SkeletonInstance = InstanceType<typeof _Skeleton>;
export type SkeletonLineInstance = InstanceType<typeof _SkeletonLine>;
export type SkeletonShapeInstance = InstanceType<typeof _SkeletonShape>;

export { _SkeletonLine as SkeletonLine, _SkeletonShape as SkeletonShape };

export default Skeleton;
