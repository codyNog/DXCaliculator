import React from "react";
import { css } from "emotion";
import Selector from "../../atoms/Selector";

interface IPropsSSelector {
  text: string;
  value: string;
  options: string[];
  fourPoints: number[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SyndromeSelector: React.FC<IPropsSSelector> = props => {
  const { text, value, options, fourPoints, onChange } = props;
  return (
    <tr>
      <th>{text}</th>
      <th>
        <Selector value={value} options={options} onChange={onChange} />
      </th>
      {fourPoints.map((point, i) => {
        return <td key={i}>{point}</td>;
      })}
    </tr>
  );
};

export default SyndromeSelector;
