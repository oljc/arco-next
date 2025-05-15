import { withInstall } from '../_utils/withInstall';
import _Card from './card';
import _CardMeta from './card-meta';
import _CardGrid from './card-grid.vue';

const Card = withInstall(_Card, { Meta: _CardMeta, Grid: _CardGrid });

export type CardInstance = InstanceType<typeof _Card>;
export type CardMetaInstance = InstanceType<typeof _CardMeta>;
export type CardGridInstance = InstanceType<typeof _CardGrid>;

export { _CardMeta as CardMeta, _CardGrid as CardGrid };

export default Card;
