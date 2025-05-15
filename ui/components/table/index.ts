import { withInstall } from '../_utils/withInstall';
import _Table from './table';
import _Thead from './table-thead';
import _Tbody from './table-tbody';
import _Tr from './table-tr';
import _Th from './table-th';
import _Td from './table-td';
import _Column from './table-column';

const Table = withInstall(_Table, {
  Thead: _Thead,
  Tbody: _Tbody,
  Tr: _Tr,
  Th: _Th,
  Td: _Td,
  Column: _Column,
});

export type TableInstance = InstanceType<typeof _Table>;
export type TheadInstance = InstanceType<typeof _Thead>;
export type TbodyInstance = InstanceType<typeof _Tbody>;
export type TrInstance = InstanceType<typeof _Tr>;
export type ThInstance = InstanceType<typeof _Th>;
export type TdInstance = InstanceType<typeof _Td>;
export type TableColumnInstance = InstanceType<typeof _Column>;

export type {
  TableData,
  TableSortable,
  TableFilterData,
  TableFilterable,
  TableColumnData,
  TableBorder,
  TableRowSelection,
  TableExpandable,
  TableDraggable,
  TableChangeExtra,
} from './interface';

export {
  _Thead as Thead,
  _Tbody as Tbody,
  _Tr as Tr,
  _Th as Th,
  _Td as Td,
  _Column as TableColumn,
};

export default Table;
