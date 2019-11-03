import React from "react";
import { css } from "emotion";

interface IPropsSPoints {
  text: string;
  fourPoints: number[];
  style?: object;
}

const TotalRow: React.FC<IPropsSPoints> = props => {
  const { text, fourPoints, style } = props;

  const TotalRowStyle = css({ ...{}, ...style });

  return (
    <tr className={TotalRowStyle}>
      <th colSpan={2}>{text}</th>
      {fourPoints.map((point, i) => {
        return <td key={i}>{point}</td>;
      })}
    </tr>
  );
};

export default TotalRow;
