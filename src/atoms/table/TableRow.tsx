import React from "react";

interface IPropsTableRow {
  rows: string[];
}

const TableRow: React.FC<IPropsTableRow> = props => {
  const { rows } = props;
  return (
    <tr>
      {rows.map(row => {
        return <th>{row}</th>;
      })}
    </tr>
  );
};

export default TableRow;
