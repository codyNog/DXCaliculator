import React from "react";
import { css } from "emotion";

interface IPropsButtonType {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: object;
}

const Button: React.FC<IPropsButtonType> = props => {
  const { text, onClick, style } = props;
  const ButtonStyle = css({ ...{}, ...style });

  return (
    <button type={"button"} className={ButtonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
