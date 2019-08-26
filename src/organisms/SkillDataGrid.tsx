import React from "react";
import ReactDataGrid from "react-data-grid";
import Skill from "../state/SkillContainer";
import SkillController from "../molecules/SkillController";
import { Section } from "../style";
import DataGrid from "../molecules/DataGrid";
import { marginM } from "../style/variables";
import Heading from "../atoms/Heading";

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
    <Section>
      <Heading text={"エフェクト"} />
      <DataGrid
        rowKey="name"
        skillData={skillData}
        onGridRowsUpdated={onGridRowsUpdated}
        selectedIndexes={selectedIndexes}
        onRowsSelected={onRowsSelected}
        onRowsDeselected={onRowsDeselected}
        margin={marginM}
      />
      <SkillController
        add={addSkillRow}
        remove={removeSkillRow}
        skillExp={skillExp}
      />
    </Section>
  );
};

export default SkillDataGrid;
