import React from "react";
import { css } from "emotion";
import Selector from "../../atoms/Selector";
import Input from "../../atoms/Input";
import State from "../../state/StateContainer";

interface IPropsSPoints {
  text: string;
  fourPoints: number[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const StatusPoints: React.FC<IPropsSPoints> = props => {
  const { text, fourPoints, onChange, options } = props;
  const state = State.useContainer();
  const { onChangeInitBonus } = state;
  return (
    <tr>
      <th colSpan={2}>{text}</th>
      {fourPoints.map((point, i) => {
        return (
          <td key={`SPselector${i}`}>
            <Selector
              value={point}
              options={options}
              onChange={e => {
                const { value } = e.currentTarget;
                onChangeInitBonus(3, value, i);
              }}
            />
          </td>
        );
      })}
    </tr>
  );
};

export default StatusPoints;
