import React from "react";
import { css } from "emotion";
import { h2 } from "../style/variables";

interface IPropsHeading {
  text: string;
  margin?: number;
}

const Heading: React.FC<IPropsHeading> = props => {
  const { text, margin } = props;

  const HeadingStyle = css({
    fontSize: h2,
    marginBottom: margin,
    left: 0
  });

  const WrapperStyle = css({
    height: 40,
    width: 200
  });

  return (
    <div className={WrapperStyle}>
      <div className={HeadingStyle}>{text}</div>
    </div>
  );
};

export default Heading;
