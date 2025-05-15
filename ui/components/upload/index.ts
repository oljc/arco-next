import { withInstall } from '../_utils/withInstall';
import _Upload from './upload';

const Upload = withInstall(_Upload);

export type UploadInstance = InstanceType<typeof _Upload>;

export type { FileStatus, FileItem, CustomIcon, RequestOption, UploadRequest } from './interfaces';

export default Upload;
