import React from "react";
import SkillController from "../molecules/SkillController";
import { Section } from "../../style";
import DataGrid from "../molecules/DataGrid";
import { marginM } from "../../style/variables";
import Heading from "../atoms/Heading";
import Effect from "../../state/container/effect";

const SkillDataGrid: React.FC = () => {
  const skill = Effect.useContainer();
  const {
    effectData,
    addEffectRow,
    removeEffectRow,
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
        effectData={effectData}
        onGridRowsUpdated={onGridRowsUpdated}
        selectedIndexes={selectedIndexes}
        onRowsSelected={onRowsSelected}
        onRowsDeselected={onRowsDeselected}
        margin={marginM}
      />
      <SkillController
        add={addEffectRow}
        remove={removeEffectRow}
        skillExp={skillExp}
      />
    </Section>
  );
};

export default SkillDataGrid;
