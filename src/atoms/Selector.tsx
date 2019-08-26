import React from "react";
import { css } from "emotion";
import { h3 } from "../style/variables";

interface IPropsSelector {
  options: string[];
  margin?: number;
  width?: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Selector: React.FC<IPropsSelector> = props => {
  const { options, margin, width, onChange } = props;
  const SelectorStyle = css({
    textAlign: "center",
    width: width ? width : 100,
    height: 30,
    marginBottom: margin,
    fontSize: h3
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
