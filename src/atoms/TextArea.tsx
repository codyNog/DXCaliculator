import React from "react";
import { h3, marginXS } from "../style/variables";

interface IPropsTextArea {
  height: number;
}

const TextArea: React.FC<IPropsTextArea> = props => {
  const { height } = props;
  return (
    <textarea
      style={{
        height: height,
        minHeight: height,
        fontSize: h3,
        padding: marginXS,
        resize: "vertical",
        borderLeft: "solid 0px black"
      }}
    ></textarea>
  );
};

export default TextArea;
