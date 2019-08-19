import React from "react";
import { css } from "emotion";

interface IPropsButtonType {
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  margin: number;
}

const Button: React.FC<IPropsButtonType> = props => {
  const { children, onClick, margin } = props;
  const ButtonStyle = css({
    marginBottom: margin
  });

  return (
    <button className={ButtonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
