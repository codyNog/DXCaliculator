import React, { useState } from "react";
import { css } from "emotion";
import { Section } from "../style";
import TableRow from "../atoms/table/TableRow";
import Selector from "../atoms/Selector";
import SyndromeSelector from "../molecules/table/SyndromeSelector";
import Heading from "../atoms/Heading";
import StatusPoints from "../molecules/table/StatusPoints";
import InitialBonus from "../molecules/table/InitialBonus";
import OptionalSelector from "../molecules/table/OptionalSelector";
import ResultPoints from "../molecules/table/ResultPoints";

const rows = ["a", "b"];

const status = ["", "", "肉体", "感覚", "精神", "社会"];

const syndrome = { name: "", status: [1, 2, 3, 4] };

const fourPoints = [...Array(4)].map(() => 0);
const fourPointsArray = [...Array(6)].map(() => fourPoints);

const StatusTable: React.FC = () => {
  const [statusPoint, setStatus] = useState(fourPointsArray);
  const onChangeStatus = (index: number, value: number[]) => {
    setStatus(statusPoint.splice(index, 1, value));
  };

  return (
    <Section
      style={{
        border: "solid 1px black "
      }}
    >
      <Heading text={"ステータス"} />
      <table>
        <tbody>
          <TableRow rows={status} />
          <SyndromeSelector
            text={"シンドローム1"}
            options={rows}
            fourPoints={fourPoints}
            onChange={e => console.log(e.currentTarget.value)}
          />
          <SyndromeSelector
            text={"シンドローム2"}
            options={rows}
            fourPoints={fourPoints}
            onChange={e => console.log(e.currentTarget.value)}
          />
          <OptionalSelector
            text={"オプショナル"}
            options={rows}
            onChange={e => console.log(e.currentTarget.value)}
          />
          <SyndromeSelector
            text={"ワークス"}
            options={rows}
            fourPoints={fourPoints}
            onChange={e => console.log(e.currentTarget.value)}
          />
          <StatusPoints
            options={[...Array(4)].map((v, i) => String(i))}
            text={"初期修正"}
            fourPoints={fourPoints}
            onChange={e => console.log(e.currentTarget.value)}
          />
          <StatusPoints
            options={[...Array(21)].map((v, i) => String(i))}
            text={"成長修正"}
            fourPoints={fourPoints}
            onChange={e => console.log(e.currentTarget.value)}
          />
          <StatusPoints
            options={[...Array(21)].map((v, i) => String(i))}
            text={"その他修正"}
            fourPoints={fourPoints}
            onChange={e => console.log(e.currentTarget.value)}
          />
          <ResultPoints text={"合計"} fourPoints={fourPoints} />
        </tbody>
      </table>
    </Section>
  );
};

export default StatusTable;
