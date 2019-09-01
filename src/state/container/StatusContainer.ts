import { useState } from "react";
import { createContainer } from "unstated-next";

const syndromeKind = ["", "キュマイラ", "エンジェルハイロウ"];

const worksKind = ["", "小学生", "中学生", "高校生"];

const syndromeColumn = {
  syndrome: "",
  statusPoint: [0, 0, 0, 0]
};

const worksColumn = {
  works: "",
  statusPoint: [0, 0, 0, 0],
  skillFixed: [0, 0]
};

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
  statusPoint: number[];
  skillFixed: number[];
}

const worksStatus = (works: string): worksStatusInterface => {
  switch (works) {
    case worksKind[1]:
      return { statusPoint: [3, 0, 0, 1], skillFixed: [1] };
    case worksKind[2]:
      return { statusPoint: [3, 0, 0, 1], skillFixed: [1] };
    default:
      return { statusPoint: [0, 0, 0, 0], skillFixed: [0] };
  }
};

const useStatus = () => {
  const [syndromeOne, setSyndromeOne] = useState(syndromeColumn);
  const [syndromeTwo, setSyndromeTwo] = useState(syndromeColumn);
  const [syndromeThree, setSyndromeThree] = useState("");
  const [works, setWorks] = useState(worksColumn);
  const [initial, setInitial] = useState([0, 0, 0, 0]);
  const [growth, setGrowth] = useState([0, 0, 0, 0]);
  const [others, setOthers] = useState([0, 0, 0, 0]);
  const [exp, setExp] = useState(0);

  const onChangeSyndromeOne = (value: string) => {
    const statusPoint = syndromeStatus(value);
    setSyndromeOne({
      syndrome: value,
      statusPoint
    });
    if (syndromeTwo.syndrome === "") {
      setSyndromeTwo({
        syndrome: value,
        statusPoint
      });
    }
  };

  const onChangeSyndromeTwo = (value: string) => {
    const statusPoint = syndromeStatus(value);
    setSyndromeTwo({
      syndrome: value,
      statusPoint
    });
  };

  const optionalOption = () => {
    const one = syndromeOne.syndrome;
    const two = syndromeTwo.syndrome;
    if (one && two) {
      if (one === two) {
        return [""];
      } else {
        const array = syndromeKind;
        const first = array.filter(arr => {
          return arr !== one;
        });
        const result = first.filter(arr => {
          return arr !== two;
        });
        return result;
      }
    } else {
      return [""];
    }
  };

  const onChangeWorks = (value: string) => {
    const { statusPoint, skillFixed } = worksStatus(value);
    setWorks({
      works: value,
      statusPoint,
      skillFixed
    });
  };

  const onChangeStatusPoint = (
    state: number[],
    setState: (value: React.SetStateAction<number[]>) => void
  ) => (index: number, value: string) => {
    const array = state.slice();
    array[index] = Number(value);
    setState(array);
  };

  const onChangeInitial = (index: number, value: string) => {
    const array = initial.slice();
    array[index] = Number(value);
    const sum = array.reduce((p, x) => p + x);
    if (sum <= 3) {
      setInitial(array);
      setExp(Number(value) * 10);
    }
  };

  const statusPointsClassify = (role: string) => {
    if (role === "initial") {
      return {
        value: initial,
        onChange: onChangeInitial
      };
    } else if (role === "growth") {
      return {
        value: growth,
        onChange: onChangeStatusPoint(growth, setGrowth)
      };
    } else {
      return {
        value: others,
        onChange: onChangeStatusPoint(others, setOthers)
      };
    }
  };

  const totalCalc = (i: number) => {
    const result =
      syndromeOne.statusPoint[i] +
      syndromeTwo.statusPoint[i] +
      works.statusPoint[i] +
      initial[i] +
      growth[i] +
      others[i];
    return result;
  };

  const total = [totalCalc(0), totalCalc(1), totalCalc(2), totalCalc(3)];

  return {
    syndromeOne,
    syndromeTwo,
    syndromeThree,
    works,
    initial,
    onChangeSyndromeOne,
    onChangeSyndromeTwo,
    setSyndromeThree,
    onChangeWorks,
    optionalOption,
    statusPointsClassify,
    total,
    exp
  };
};

const Status = createContainer(useStatus);

export default Status;
