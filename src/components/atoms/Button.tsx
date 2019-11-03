import React from "react";
import { css } from "emotion";

interface IPropsButtonType {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

const Button: React.FC<IPropsButtonType> = props => {
  const { children, onClick, style } = props;
  const ButtonStyle = css({
    ...{ height: 30, width: 80, fontSize: 12 },
    ...style
  });

  return (
    <button type={"button"} className={ButtonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
