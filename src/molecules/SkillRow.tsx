import React from "react";
import { skillFixedInterface } from "../interface";
import Selector from "../atoms/Selector";
import Input from "../atoms/Input";

interface IPropsSkillRow {
  skill: skillFixedInterface[];
  onChangeSelector: (
    event: React.ChangeEvent<HTMLSelectElement>,
    i: number
  ) => void;
  onChangeInput: (
    event: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => void;
}

const SkillRow: React.FC<IPropsSkillRow> = props => {
  const { skill, onChangeSelector, onChangeInput } = props;

  return (
    <div>
      {skill.map((skill, i) => {
        const { name, value } = skill;
        const options = i > 4 ? ["a", "b"] : [name];
        return (
          <div key={`skillRow${i}`}>
            <Selector
              options={options}
              value={name}
              onChange={event => onChangeSelector(event, i - 1)}
            />
            <Input
              type={"number"}
              value={value}
              onChange={event => onChangeInput(event, i - 1)}
              placeholder={""}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SkillRow;
