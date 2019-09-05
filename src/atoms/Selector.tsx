import React from "react";
import { css } from "emotion";
import { h3 } from "../style/variables";

interface IPropsSelector {
  options: string[];
  style?: object;
  width?: number;
  value: number | string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Selector: React.FC<IPropsSelector> = props => {
  const { options, style, width, value, onChange } = props;
  const SelectorStyle = css({
    ...{
      textAlign: "center",
      width: width ? width : 180,
      height: 30,
      fontSize: h3
    },
    ...style
  });
  return (
    <select className={SelectorStyle} value={value} onChange={onChange}>
      {options.map((option, i) => {
        return (
          <option key={`option${i}`} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Selector;
