import React from "react";
import { css } from "emotion";
import { h3 } from "../style/variables";

interface IPropsExpCounter {
  style: object;
  exp: number;
}

const ExpCounter: React.FC<IPropsExpCounter> = props => {
  const { style, exp } = props;

  const ExpCounterStyle = css({
    ...{
      fontSize: h3,
      lineHeight: `${h3 * 0.5}px`
    },
    ...style
  });

  return <div className={ExpCounterStyle}>EXP合計 {exp}</div>;
};

export default ExpCounter;
