import React from "react";
import { css } from "emotion";
import { h2 } from "../../style/variables";

interface IPropsHeading {
  text: string;
  style?: React.CSSProperties;
}

const Heading: React.FC<IPropsHeading> = props => {
  const { text, style } = props;

  const HeadingStyle = css({
    fontSize: h2,
    left: 0
  });

  const WrapperStyle = css({
    ...{
      height: 40,
      width: 200
    },
    ...style
  });

  return (
    <div className={WrapperStyle}>
      <div className={HeadingStyle}>{text}</div>
    </div>
  );
};

export default Heading;
