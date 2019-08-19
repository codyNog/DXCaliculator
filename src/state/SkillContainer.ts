import { useState } from "react";
import { createContainer } from "unstated-next";
import ReactDataGrid from "react-data-grid";

interface SkillObject {
  check: string;
  name: string;
  level: number;
  cost: number;
  limit: string;
  critical: number;
  dice: number;
  fixed: number;
  hp: number;
}

interface RowInterface {
  fromRow: number;
  toRow: number;
  updated: { level: number };
}

const initialState = [
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
  const [skillData, setSkillData] = useState(initialState);
  const addSkillRow = () => {
    const key = skillData.length;
    const add = addSkill(key);
    setSkillData(skillData.concat(add));
    setSkillExp(skillExp + 15);
  };
  const removeSkillRow = (): void => {
    const dataLength = skillData.length;
    const lastData = skillData[dataLength - 1];
    if (dataLength > 2) {
      const newSkillData = skillData.slice(0, skillData.length - 1);
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
    const rows = skillData.slice();
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
      if (!isNaN(updated.level) && !isNaN(skillData[fromRow].level))
        gapSkillExp = updated.level - skillData[fromRow].level;
    }
    const newState = updateRows({ fromRow, toRow, updated });
    setSkillData(newState);
    setSkillExp(skillExp + gapSkillExp * 5);
  };

  const [selectedIndexes, setSelectedIndexes] = useState([
    {
      check: "none",
      name: "",
      level: 1,
      cost: 0,
      limit: "--",
      critical: 0,
      dice: 0,
      fixed: 0,
      hp: 0
    }
  ]);

  const onRowsSelected = (
    rows: ReactDataGrid.SelectionParams<SkillObject>[]
  ): void => {
    setSelectedIndexes(selectedIndexes.concat(rows.map(r => r.row)));
  };

  const onRowsDeselected = (
    rows: ReactDataGrid.SelectionParams<SkillObject>[]
  ): void => {
    const rowIndexes = rows.map(r => r.rowIdx);
    /*  setSelectedIndexes(
      selectedIndexes.filter((i:number) => rowIndexes.indexOf(i) === -1)
    ); */
  };

  const [skillExp, setSkillExp] = useState(30);

  return {
    skillData,
    addSkillRow,
    removeSkillRow,
    onGridRowsUpdated,
    selectedIndexes,
    onRowsSelected,
    onRowsDeselected,
    skillExp
  };
};

const Skill = createContainer(useSkill);

export default Skill;

/* (rows: ReactDataGrid.SelectionParams<{
  check: string;
  name: string;
  level: number;
  cost: number;
  limit: string;
  critical: number;
  dice: number;
  fixed: number;
  hp: number;
}>[]) => void) */
