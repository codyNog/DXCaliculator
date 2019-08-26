import React from "react";
import { css } from "emotion";
import { placeholder } from "@babel/types";

interface IPropsInput {
  type: string;
  value: string;
  margin?: number;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IPropsInput> = props => {
  const { type, value, margin, onChange, placeholder } = props;
  const InputStyle = css({
    width: 30
  });

  return (
    <input
      className={InputStyle}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></input>
  );
};

export default Input;
