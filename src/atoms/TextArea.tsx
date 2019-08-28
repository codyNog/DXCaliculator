import React from "react";
import { h3, marginXS } from "../style/variables";

interface IPropsTextArea {
  style: object;
}

const TextArea: React.FC<IPropsTextArea> = props => {
  const { style } = props;
  return (
    <textarea
      style={{
        ...{
          fontSize: h3,
          padding: marginXS,
          resize: "vertical",
          borderLeft: "solid 0px black"
        },
        ...style
      }}
    ></textarea>
  );
};

export default TextArea;
