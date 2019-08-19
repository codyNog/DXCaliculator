import React, { useState } from "react";
import ReactDataGrid from "react-data-grid";
import Skill from "../state/SkillContainer";
import SkillController from "../molecules/SkillController";

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

const SkillDataGrid = () => {
  const skill = Skill.useContainer();
  const {
    skillData,
    addSkillRow,
    removeSkillRow,
    onGridRowsUpdated,
    selectedIndexes,
    onRowsSelected,
    onRowsDeselected,
    skillExp
  } = skill;
  return (
    <div>
      <ReactDataGrid
        rowKey="name"
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
      <SkillController
        add={addSkillRow}
        remove={removeSkillRow}
        skillExp={skillExp}
      />
    </div>
  );
};

export default SkillDataGrid;
