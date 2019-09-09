import React from "react";
import { skillFixedInterface } from "../interface";

interface IPropsSkillRow {
  skill: skillFixedInterface[];
}

const SkillRow: React.FC<IPropsSkillRow> = props => {
  const { skill } = props;

  return (
    <div>
      {skill.map(skill => {
        return (
          <div key={`skillRow${skill}`}>
            <div>{skill.name}</div>
            <div>{skill.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillRow;
