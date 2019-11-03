import React from "react";
import { h3, marginXS } from "../../style/variables";

interface IPropsTextArea {
  style: React.CSSProperties;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<IPropsTextArea> = props => {
  const { style, onChange } = props;
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
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
