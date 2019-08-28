import React from "react";
import { css } from "emotion";
import { h3 } from "../style/variables";

interface IPropsSelector {
  options: string[];
  style?: object;
  width?: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Selector: React.FC<IPropsSelector> = props => {
  const { options, style, width, onChange } = props;
  const SelectorStyle = css({
    ...{
      textAlign: "center",
      width: width ? width : 100,
      height: 30,
      fontSize: h3
    },
    ...style
  });
  return (
    <select className={SelectorStyle} onChange={onChange}>
      {options.map(option => {
        return <option value={option}>{option}</option>;
      })}
    </select>
  );
};

export default Selector;
