import React from "react";
import Button from "../atoms/Button";
import { css } from "emotion";
import ExpCounter from "../atoms/ExpCounter";
import { marginM } from "../style/variables";

interface IPropsSkillController {
  add: (event: React.MouseEvent<HTMLButtonElement>) => void;
  remove: (event: React.MouseEvent<HTMLButtonElement>) => void;
  skillExp: number;
  marginBottom?: number;
}

const SkillController: React.FC<IPropsSkillController> = props => {
  const { add, remove, skillExp, marginBottom } = props;
  const ControllerStyle = css({
    position: "relative",
    display: "flex",
    marginBottom: marginBottom
  });
  const ButtonStyle = {
    height: 20
  };
  return (
    <div className={ControllerStyle}>
      <Button text={"+増やす"} onClick={add} style={ButtonStyle} />
      <Button text={"-減らす"} onClick={remove} style={ButtonStyle} />
      <ExpCounter
        style={{ right: marginM, position: "absolute" }}
        exp={skillExp}
      />
    </div>
  );
};

export default SkillController;
