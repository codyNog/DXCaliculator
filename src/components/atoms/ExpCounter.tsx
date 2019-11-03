import React from "react";
import { css } from "emotion";
import { h3 } from "../../style/variables";

interface IPropsExpCounter {
  style: React.CSSProperties;
  exp: number;
}

const ExpCounter: React.FC<IPropsExpCounter> = props => {
  const { style, exp } = props;

  const ExpCounterStyle = css({
    ...{
      fontSize: h3
    },
    ...style
  });

  return <div className={ExpCounterStyle}>EXP合計 {exp}</div>;
};

export default ExpCounter;
