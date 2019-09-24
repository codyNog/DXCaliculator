import React from "react";
import { css } from "emotion";
import { placeholder } from "@babel/types";

interface IPropsInput {
  type: string;
  value: string | number;
  style?: object;
  placeholder: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IPropsInput> = props => {
  const { type, value, style, onChange, placeholder } = props;
  const InputStyle = css({
    ...{
      height: "100%",
      width: 50
    },
    ...style
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
