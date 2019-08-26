import React from "react";
import { css } from "emotion";

interface IPropsSPoints {
  text: string;
  fourPoints: number[];
}

const ResultPoints: React.FC<IPropsSPoints> = props => {
  const { text, fourPoints } = props;
  return (
    <tr>
      <th colSpan={2}>{text}</th>
      {fourPoints.map(point => {
        return <td>{point}</td>;
      })}
    </tr>
  );
};

export default ResultPoints;
