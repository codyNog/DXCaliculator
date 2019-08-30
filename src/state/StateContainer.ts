import { useState } from "react";
import { createContainer } from "unstated-next";
import ReactDataGrid from "react-data-grid";
import { SkillObject } from "../interface";

const syndromeKind = ["", "キュマイラ", "エンジェルハイロウ"];

const worksKind = ["", "小学生", "中学生", "高校生"];

const fourPoints = [...Array(4)].map(() => 0);
const fourPointsArray = [...Array(6)].map(() => fourPoints);

const initialStatus = {
  syndrome: [syndromeKind[0], syndromeKind[0], "--"],
  works: worksKind[0],
  statusPoint: [...Array(6)].map(() => fourPoints)
};

interface RowInterface {
  fromRow: number;
  toRow: number;
  updated: { level: number };
}

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

const useGlobalState = () => {
  const [status, setStatus] = useState(initialStatus);
  const { syndrome, statusPoint, works } = status;

  const syndromeStatus = (syndrome: string): number[] => {
    switch (syndrome) {
      case syndromeKind[1]:
        return [3, 0, 0, 1];
      case syndromeKind[2]:
        return [0, 3, 1, 0];
      default:
        return [0, 0, 0, 0];
    }
  };

  interface worksStatusInterface {
    bonus: number[];
    skill: number[];
  }

  const worksStatus = (works: string): worksStatusInterface => {
    switch (works) {
      case worksKind[1]:
        return { bonus: [3, 0, 0, 1], skill: [1] };
      case worksKind[2]:
        return { bonus: [3, 0, 0, 1], skill: [1] };
      default:
        return { bonus: [0, 0, 0, 0], skill: [0] };
    }
  };

  const changeSyndrome = (index: number, value: string) => {
    const array = syndrome;
    array.splice(index, 1, value);
    return array;
  };

  const changeStatusPoint = (index: number, value: number[]) => {
    const array = statusPoint;
    array.splice(index, 1, value);
    return array;
  };

  const onChangeSyndrome = (index: number, value: string) => {
    const { works } = status;
    const syndrome = changeSyndrome(index, value);
    const statusPoint = changeStatusPoint(index, syndromeStatus(value));
    const result = {
      syndrome,
      works,
      statusPoint
    };
    setStatus(result);
  };

  const optionalOption = () => {
    if (syndrome[0] && syndrome[1]) {
      if (syndrome[0] === syndrome[1]) {
        return [""];
      } else {
        const array = syndromeKind;
        const first = array.filter(arr => {
          return arr !== syndrome[0];
        });
        const result = first.filter(arr => {
          return arr !== syndrome[1];
        });
        return result;
      }
    } else {
      return [""];
    }
  };

  const onChangeOptional = (index: number, value: string) => {
    const { statusPoint, works } = status;
    const syndrome = changeSyndrome(index, value);
    const result = {
      syndrome,
      works,
      statusPoint
    };
    setStatus(result);
  };

  const onChangeWorks = (index: number, value: string) => {
    const works = value;
    const { bonus, skill } = worksStatus(value);
    const statusPoint = changeStatusPoint(index, bonus);
    const result = {
      syndrome,
      works,
      statusPoint
    };
    setStatus(result);
  };

  const changeInitBonus = (index: number, value: string, id: number) => {
    const array = statusPoint;
    const arraySum = array[index].reduce((p, c) => {
      return p + c;
    });
    if (arraySum > 3) {
      return statusPoint;
    } else {
      return array;
    }
  };

  // FIX
  const onChangeInitBonus = (index: number, value: string, id: number) => {
    const { works, syndrome, statusPoint } = status;
    const array = statusPoint;
    const arraySum = array[index].reduce((p, c) => {
      return p + c;
    });
    const updated = changeInitBonus(index, value, id);
    const result = {
      syndrome,
      works,
      statusPoint: updated
    };
    setStatus(result);
  };

  const onChangeStatusPoints = (index: number, value: string) => {
    const { works, syndrome } = status;
    const { bonus, skill } = worksStatus(value);
    const statusPoint = changeStatusPoint(index, bonus);
    const result = {
      syndrome,
      works,
      statusPoint
    };
    setStatus(result);
  };

  const [skillData, setSkillData] = useState(initialSkillData);
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
    status,
    onChangeSyndrome,
    onChangeOptional,
    onChangeWorks,
    optionalOption,
    onChangeInitBonus,
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

const State = createContainer(useGlobalState);

export default State;
