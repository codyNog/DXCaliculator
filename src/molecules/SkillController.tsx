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
  return (
    <div className={ControllerStyle}>
      <Button text={"+増やす"} onClick={add} />
      <Button text={"-減らす"} onClick={remove} />
      <ExpCounter style={{ right: marginM, position: "absolute" }}>
        {skillExp}
      </ExpCounter>
    </div>
  );
};

export default SkillController;
