import React from "react";
import { css } from "emotion";
import Selector from "../../atoms/Selector";

interface IPropsOSelector {
  text: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const OptionalSelector: React.FC<IPropsOSelector> = props => {
  const { text, value, options, onChange } = props;
  return (
    <tr>
      <th>{text}</th>
      <th>
        <Selector value={value} options={options} onChange={onChange} />
      </th>
    </tr>
  );
};

export default OptionalSelector;
