import React from "react";
import { css } from "emotion";
import Selector from "../../atoms/Selector";
import Status from "../../state/container/StatusContainer";

interface IPropsSPoints {
  role: string;
  text: string;
  options: string[];
  id: number;
}

const array = [0, 0, 0, 0];

const StatusPoints: React.FC<IPropsSPoints> = props => {
  const { role, text, id, options } = props;
  const status = Status.useContainer();
  const { statusPointsClassify } = status;
  const { value, onChange } = statusPointsClassify(role);

  return (
    <tr>
      <th colSpan={2}>{text}</th>
      {array.map((point, i) => {
        return (
          <td key={`${role}${i}`}>
            <Selector
              value={value[i]}
              options={options}
              onChange={e => {
                const { value } = e.currentTarget;
                onChange(i, value);
              }}
            />
          </td>
        );
      })}
    </tr>
  );
};

export default StatusPoints;
