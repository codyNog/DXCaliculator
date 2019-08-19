import React from "react";
import Button from "../atoms/Button";
import { css } from "emotion";
import ExpCounter from "../atoms/ExpCounter";

interface IPropsSkillController {
  add: (event: React.MouseEvent<HTMLButtonElement>) => void;
  remove: (event: React.MouseEvent<HTMLButtonElement>) => void;
  skillExp: number;
}

const SkillController: React.FC<IPropsSkillController> = props => {
  const { add, remove, skillExp } = props;
  const ControllerStyle = css({
    display: "inline-flex"
  });
  return (
    <div className={ControllerStyle}>
      <Button onClick={add} margin={0}>
        +
      </Button>
      <Button onClick={remove} margin={0}>
        -
      </Button>
      <ExpCounter style={{ right: 0, position: "fixed" }}>
        {skillExp}
      </ExpCounter>
    </div>
  );
};

export default SkillController;
