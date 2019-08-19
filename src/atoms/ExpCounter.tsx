import React from "react";
import { css } from "emotion";

interface IPropsExpCounter {
  style: object;
}

const ExpCounter: React.FC<IPropsExpCounter> = props => {
  const { style, children } = props;

  const ExpCounterStyle = css({
    ...{
      height: 50,
      fontSize: 20
    },
    ...style
  });

  return <div className={ExpCounterStyle}>EXP合計 {children}</div>;
};

export default ExpCounter;
