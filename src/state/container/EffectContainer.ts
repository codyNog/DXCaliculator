import { SkillObject, RowInterface } from "../../interface";
import ReactDataGrid from "react-data-grid";
import { useState } from "react";
import { createContainer } from "unstated-next";

const initialSkillData = [
  {
    check: "none",
    name: "ワーディング",
    level: 1,
    cost: 0,
    limit: "--",
    critical: 0,
    dice: 0,
    fixed: 0,
    hp: 0
  },
  {
    check: "none",
    name: "リザレクト",
    level: 1,
    cost: 0,
    limit: "--",
    critical: 0,
    dice: 0,
    fixed: 0,
    hp: 0
  }
];

const addSkill = (i: number): SkillObject => {
  return {
    check: "none",
    name: "",
    level: 1,
    cost: 0,
    limit: "--",
    critical: 0,
    dice: 0,
    fixed: 0,
    hp: 0
  };
};

const useSkill = () => {
  const [effectData, setSkillData] = useState(initialSkillData);
  const addEffectRow = () => {
    const key = effectData.length;
    const add = addSkill(key);
    setSkillData(effectData.concat(add));
    setSkillExp(skillExp + 15);
  };
  const removeEffectRow = (): void => {
    const dataLength = effectData.length;
    const lastData = effectData[dataLength - 1];
    if (dataLength > 2) {
      const newSkillData = effectData.slice(0, effectData.length - 1);
      let minusSkillExp = 0;
      for (let i = lastData.level; i--; i < 2) {
        minusSkillExp += 5;
      }
      setSkillData(newSkillData);
      setSkillExp(skillExp - minusSkillExp - 10);
    }
  };
  const updateRows = ({
    fromRow,
    toRow,
    updated
  }: RowInterface): SkillObject[] => {
    const rows = effectData.slice();
    for (let i = fromRow; i <= toRow; i++) {
      rows[i] = { ...rows[i], ...updated };
    }
    return rows;
  };
  const onGridRowsUpdated = ({
    fromRow,
    toRow,
    updated
  }: RowInterface): void => {
    let gapSkillExp = 0;
    if ("level" in updated) {
      if (!isNaN(updated.level) && !isNaN(effectData[fromRow].level))
        gapSkillExp = updated.level - effectData[fromRow].level;
    }
    const newState = updateRows({ fromRow, toRow, updated });
    setSkillData(newState);
    setSkillExp(skillExp + gapSkillExp * 5);
  };

  const initialIndex: number[] = [];
  const [selectedIndexes, setSelectedIndexes] = useState(initialIndex);

  const onRowsSelected = (
    rows: ReactDataGrid.SelectionParams<SkillObject>[]
  ): void => {
    const rowIndexes = rows.map(r => r.rowIdx);
    setSelectedIndexes(selectedIndexes.concat(rowIndexes));
  };

  const onRowsDeselected = (
    rows: ReactDataGrid.SelectionParams<SkillObject>[]
  ): void => {
    const rowIndexes = rows.map(r => r.rowIdx);
    setSelectedIndexes(
      selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1)
    );
  };

  const [skillExp, setSkillExp] = useState(30);

  return {
    effectData,
    addEffectRow,
    removeEffectRow,
    onGridRowsUpdated,
    selectedIndexes,
    onRowsSelected,
    onRowsDeselected,
    skillExp
  };
};

const Effect = createContainer(useSkill);

export default Effect;
