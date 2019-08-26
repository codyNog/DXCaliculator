import React from "react";
import ReactDataGrid from "react-data-grid";
import { SkillObject, RowInterface } from "../interface";

interface IPropsDataGrid {
  rowKey: string;
  skillData: SkillObject[];
  onGridRowsUpdated: ({ fromRow, toRow, updated }: RowInterface) => void;
  selectedIndexes: number[];
  onRowsSelected: (rows: ReactDataGrid.SelectionParams<SkillObject>[]) => void;
  onRowsDeselected: (
    rows: ReactDataGrid.SelectionParams<SkillObject>[]
  ) => void;
  margin?: number;
}

const columns = [
  { key: "name", name: "エフェクト", editable: true },
  { key: "level", name: "レベル", editable: true },
  { key: "cost", name: "コスト", editable: true },
  { key: "limit", name: "制限", editable: true },
  { key: "critical", name: "C値", editable: true },
  { key: "dice", name: "ダイス増減", editable: true },
  { key: "fixed", name: "修正値増減", editable: true },
  { key: "hp", name: "HP増減", editable: true }
];

const DataGrid: React.FC<IPropsDataGrid> = props => {
  const {
    rowKey,
    skillData,
    onGridRowsUpdated,
    selectedIndexes,
    onRowsSelected,
    onRowsDeselected,
    margin
  } = props;
  return (
    <div style={{ marginBottom: margin }}>
      <ReactDataGrid
        rowKey={rowKey}
        columns={columns}
        rowGetter={i => skillData[i]}
        rowsCount={skillData.length}
        minHeight={400}
        onGridRowsUpdated={onGridRowsUpdated}
        enableCellSelect={true}
        rowSelection={{
          showCheckbox: true,
          enableShiftSelect: true,
          onRowsSelected: onRowsSelected,
          onRowsDeselected: onRowsDeselected,
          selectBy: {
            indexes: selectedIndexes
          }
        }}
      />
    </div>
  );
};

export default DataGrid;
