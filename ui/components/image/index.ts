import { withInstall } from '../_utils/withInstall';
import _Image from './image.vue';
import _ImagePreview from './preview.vue';
import _ImagePreviewGroup from './preview-group.vue';
import _ImagePreviewAction from './preview-action';

const Image = withInstall(_Image, { Preview: _ImagePreview, PreviewGroup: _ImagePreviewGroup });

export type ImageInstance = InstanceType<typeof _Image>;
export type ImagePreviewInstance = InstanceType<typeof _ImagePreview>;
export type ImagePreviewGroupInstance = InstanceType<typeof _ImagePreviewGroup>;
export type ImagePreviewActionInstance = InstanceType<typeof _ImagePreviewAction>;

export {
  _ImagePreview as ImagePreview,
  _ImagePreviewGroup as ImagePreviewGroup,
  _ImagePreviewAction as ImagePreviewAction,
};

export default Image;
