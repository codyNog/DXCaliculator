import React from "react";
import Selector from "../../atoms/Selector";
import Status from "../../../state/container/status";

interface IPropsSPoints {
  role: string;
  text: string;
  options: string[];
}

const array = [0, 0, 0, 0];

const StatusPoints: React.FC<IPropsSPoints> = props => {
  const { role, text, options } = props;
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
              style={{ width: 100 }}
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
