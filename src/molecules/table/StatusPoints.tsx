import React from "react";
import { css } from "emotion";
import Selector from "../../atoms/Selector";
import Input from "../../atoms/Input";

interface IPropsSPoints {
  text: string;
  fourPoints: number[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const StatusPoints: React.FC<IPropsSPoints> = props => {
  const { text, fourPoints, onChange, options } = props;
  return (
    <tr>
      <th colSpan={2}>{text}</th>
      {fourPoints.map((point, i) => {
        return (
          <td>
            <Selector
              value={point}
              key={i}
              options={options}
              onChange={onChange}
            />
          </td>
        );
      })}
    </tr>
  );
};

export default StatusPoints;
