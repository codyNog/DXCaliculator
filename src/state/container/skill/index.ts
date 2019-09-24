import { useState } from "react";
import { createContainer } from "unstated-next";

const useSkill = () => {
  const [skillArray, setSkillArray] = useState([]);
  return {
    skillArray,
    setSkillArray
  };
};

const Skill = createContainer(useSkill);

export default Skill;
