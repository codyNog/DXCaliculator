import { useState } from "react";
import { createContainer } from "unstated-next";
import { syndromeKind, syndromeColumn, worksColumn } from "../../variables";
import {
  worksStatus,
  syndromeStatus,
  awakenErosion,
  urgeErosion
} from "../../utility";

const useStatus = () => {
  const [syndromeOne, setSyndromeOne] = useState(syndromeColumn);
  const [syndromeTwo, setSyndromeTwo] = useState(syndromeColumn);
  const [syndromeThree, setSyndromeThree] = useState("");
  const [awaken, setAwaken] = useState("");
  const [urge, setUrge] = useState("");
  const [works, setWorks] = useState(worksColumn);
  const [initial, setInitial] = useState([0, 0, 0, 0]);
  const [growth, setGrowth] = useState([0, 0, 0, 0]);
  const [others, setOthers] = useState([0, 0, 0, 0]);
  const [statusExp, setExp] = useState(0);
  const [skill, setSkill] = useState([{ name: "あ", value: 0 }]);

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
    console.log(skillFixed);
    setSkill(skillFixed);
    setWorks({
      works: value,
      statusPoint
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
  const abilityValue = (): number[] => {
    const hp = 20 + total[0] * 2 + total[2];
    const erosion = awakenErosion(awaken) + urgeErosion(urge);
    const initiative = total[1] * 2 + total[2];
    const move = initiative + 5;
    return [hp, erosion, initiative, move];
  };

  return {
    syndromeOne,
    syndromeTwo,
    syndromeThree,
    awaken,
    urge,
    works,
    initial,
    skill,
    onChangeSyndromeOne,
    onChangeSyndromeTwo,
    setSyndromeThree,
    setAwaken,
    setUrge,
    onChangeWorks,
    optionalOption,
    statusPointsClassify,
    total,
    abilityValue,
    statusExp
  };
};

const Status = createContainer(useStatus);

export default Status;
