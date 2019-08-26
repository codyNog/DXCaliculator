import React from "react";
import { css } from "emotion";
import Selector from "../../atoms/Selector";

interface IPropsSSelector {
  text: string;
  options: string[];
  fourPoints: number[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SyndromeSelector: React.FC<IPropsSSelector> = props => {
  const { text, options, fourPoints, onChange } = props;
  return (
    <tr>
      <th>{text}</th>
      <th>
        <Selector options={options} onChange={onChange} />
      </th>
      {fourPoints.map(point => {
        return <td>{point}</td>;
      })}
    </tr>
  );
};

export default SyndromeSelector;
