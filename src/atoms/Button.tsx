import React from "react";
import { css } from "emotion";

interface IPropsButtonType {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  margin?: number;
}

const Button: React.FC<IPropsButtonType> = props => {
  const { text, onClick, margin } = props;
  const ButtonStyle = css({
    marginBottom: margin
  });

  return (
    <button type={"button"} className={ButtonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
