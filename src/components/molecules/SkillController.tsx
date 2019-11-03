import React from "react";
import Button from "../atoms/Button";
import { css } from "emotion";
import ExpCounter from "../atoms/ExpCounter";
import { marginM } from "../../style/variables";

interface IPropsSkillController {
  add: (event: React.MouseEvent<HTMLButtonElement>) => void;
  remove: (event: React.MouseEvent<HTMLButtonElement>) => void;
  skillExp: number;
  marginBottom?: number;
}

const SkillController: React.FC<IPropsSkillController> = props => {
  const { add, remove, skillExp, marginBottom } = props;
  const ControllerStyle = css({
    height: 40,
    position: "relative",
    display: "flex",
    marginBottom: marginBottom
  });
  const ButtonStyle = {};
  return (
    <div className={ControllerStyle}>
      <Button onClick={add} style={ButtonStyle}>
        +追加する
      </Button>
      <Button onClick={remove} style={ButtonStyle}>
        -削除する
      </Button>
      <ExpCounter
        style={{ right: marginM, position: "absolute" }}
        exp={skillExp}
      />
    </div>
  );
};

export default SkillController;
