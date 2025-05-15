import { withInstall } from '../_utils/withInstall';
import _Anchor from './anchor.vue';
import AnchorLink from './anchor-link.vue';

const Anchor = withInstall(_Anchor, { Link: AnchorLink });

export type AnchorInstance = InstanceType<typeof _Anchor>;
export type AnchorLinkInstance = InstanceType<typeof AnchorLink>;

export { AnchorLink };

export default Anchor;
