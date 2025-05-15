import { withInstall } from '../_utils/withInstall';
import _Watermark from './watermark';

const Watermark = withInstall(_Watermark);

export type WatermarkInstance = InstanceType<typeof _Watermark>;

export default Watermark;
