import React from "react";
import Selector from "../atoms/Selector";
import Input from "../atoms/Input";

interface IPropsSkillRow {
  name: string;
  options: string[];
  value: number;
  onChangeSelector: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SkillRow: React.FC<IPropsSkillRow> = props => {
  const { options, name, value, onChangeSelector, onChangeInput } = props;

  return (
    <div>
      <Selector options={options} value={name} onChange={onChangeSelector} />
      <Input
        type={"number"}
        value={value}
        onChange={onChangeInput}
        placeholder={""}
      />
    </div>
  );
};

export default SkillRow;
