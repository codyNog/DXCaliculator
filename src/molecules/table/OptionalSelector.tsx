import React from "react";
import { css } from "emotion";
import Selector from "../../atoms/Selector";

interface IPropsOSelector {
  text: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const OptionalSelector: React.FC<IPropsOSelector> = props => {
  const { text, options, onChange } = props;
  return (
    <tr>
      <th>{text}</th>
      <th>
        <Selector options={options} onChange={onChange} />
      </th>
    </tr>
  );
};

export default OptionalSelector;
