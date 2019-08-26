import React from "react";
import { css } from "emotion";
import { h3 } from "../style/variables";

interface IPropsExpCounter {
  style: object;
}

const ExpCounter: React.FC<IPropsExpCounter> = props => {
  const { style, children } = props;

  const ExpCounterStyle = css({
    ...{
      fontSize: h3,
      lineHeight: `${h3 * 0.5}px`
    },
    ...style
  });

  return <div className={ExpCounterStyle}>EXP合計 {children}</div>;
};

export default ExpCounter;
