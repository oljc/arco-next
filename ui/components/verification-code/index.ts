import { withInstall } from '../_utils/withInstall';
import _VerificationCode from './verification-code';

const VerificationCode = withInstall(_VerificationCode);

export type VerificationCodeInstance = InstanceType<typeof _VerificationCode>;

export default VerificationCode;
