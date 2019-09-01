import React from "react";
import SkillController from "../molecules/SkillController";
import { Section } from "../style";
import DataGrid from "../molecules/DataGrid";
import { marginM } from "../style/variables";
import Heading from "../atoms/Heading";
import Skill from "../state/container/SkillContainer";

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
