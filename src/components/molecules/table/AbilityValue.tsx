import React from "react";

interface IPropsAbility {
  fourPoints: number[];
}

const AbilityValue: React.FC<IPropsAbility> = props => {
  const { fourPoints } = props;
  return (
    <tr>
      <th colSpan={2}></th>
      {fourPoints.map((point, i) => {
        return <td key={i}>{point}</td>;
      })}
    </tr>
  );
};

export default AbilityValue;
