import { withInstall } from '../_utils/withInstall';
import _GridRow from './grid-row.vue';
import _GridCol from './grid-col.vue';
import _Grid from './grid.vue';
import _GridItem from './grid-item.vue';

const Grid = withInstall(_Grid, {
  Row: _GridRow,
  Col: _GridCol,
  Item: _GridItem,
});

export type GridRowInstance = InstanceType<typeof _GridRow>;
export type GridColInstance = InstanceType<typeof _GridCol>;
export type GridInstance = InstanceType<typeof _Grid>;
export type GridItemInstance = InstanceType<typeof _GridItem>;

export type { ResponsiveValue, RowProps, ColProps, GridProps, GridItemProps } from './interface';

export { _GridRow as Row, _GridCol as Col, _GridItem as GridItem };
export default Grid;
