import { useState } from "react";
import { createContainer } from "unstated-next";

const useExp = (initialState = 30) => {
  const [exp, setExp] = useState(initialState);
  const addSkill = () => {
    setExp(exp + 15);
  };
  const caliculate = (number: number): number => {
    let result = 0;
    for (let i = number; i--; i = 1) {
      result += 5;
    }
    return result;
  };
  const removeSkill = (number: number): void => {
    setExp(exp - 15 - caliculate(number));
  };

  return { exp, addSkill, removeSkill };
};

const Exp = createContainer(useExp);

export default Exp;
