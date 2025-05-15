import { withInstall } from '../_utils/withInstall';
import _Textarea from './textarea.vue';

const Textarea = withInstall(_Textarea);

export type TextareaInstance = InstanceType<typeof _Textarea>;

export default Textarea;
