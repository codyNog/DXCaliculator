import React from "react";
import { css } from "emotion";
import ExpCounter from "../../atoms/ExpCounter";
import { marginM } from "../../../style/variables";

interface IPropsSkillController {
  exp: number;
  marginBottom?: number;
}

const StatusController: React.FC<IPropsSkillController> = props => {
  const { exp, marginBottom } = props;
  const ControllerStyle = css({
    height: 20,
    position: "relative",
    display: "flex",
    marginBottom: marginBottom
  });
  return (
    <div className={ControllerStyle}>
      <div style={{ visibility: "hidden" }}>a</div>
      <ExpCounter style={{ right: marginM, position: "absolute" }} exp={exp} />
    </div>
  );
};

export default StatusController;
