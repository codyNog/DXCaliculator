import React, { useState } from "react";
import { Section } from "../style";
import TableRow from "../atoms/table/TableRow";
import SyndromeSelector from "../molecules/table/SyndromeSelector";
import Heading from "../atoms/Heading";
import StatusPoints from "../molecules/table/StatusPoints";
import OptionalSelector from "../molecules/table/OptionalSelector";
import ResultPoints from "../molecules/table/ResultPoints";
import State from "../state/StateContainer";

const rows = ["", "", "肉体", "感覚", "精神", "社会"];
const syndromeKind = ["", "キュマイラ", "エンジェルハイロウ"];

const worksKind = ["", "小学生", "中学生", "高校生"];

const StatusTable: React.FC = () => {
  const state = State.useContainer();
  const {
    status,
    onChangeSyndrome,
    onChangeOptional,
    optionalOption,
    onChangeWorks
  } = state;
  const { syndrome, works, statusPoint } = status;

  return (
    <Section
      style={{
        border: "solid 1px black "
      }}
    >
      <Heading text={"ステータス"} />
      <table>
        <tbody>
          <TableRow rows={rows} />
          <SyndromeSelector
            key={"Sselector1"}
            value={syndrome[0]}
            text={"シンドローム1"}
            options={syndromeKind}
            fourPoints={statusPoint[0]}
            onChange={e => {
              const { value } = e.currentTarget;
              onChangeSyndrome(0, value);
            }}
          />
          <SyndromeSelector
            key={"Sselector2"}
            value={syndrome[1]}
            text={"シンドローム2"}
            options={syndromeKind}
            fourPoints={statusPoint[1]}
            onChange={e => {
              const { value } = e.currentTarget;
              onChangeSyndrome(1, value);
            }}
          />
          <OptionalSelector
            value={syndrome[2]}
            text={"オプショナル"}
            options={optionalOption()}
            onChange={e => {
              const { value } = e.currentTarget;
              onChangeOptional(2, value);
            }}
          />
          <SyndromeSelector
            key={"Sselector3"}
            value={works}
            text={"ワークス"}
            options={worksKind}
            fourPoints={statusPoint[2]}
            onChange={e => {
              const { value } = e.currentTarget;
              onChangeWorks(2, value);
            }}
          />
          <StatusPoints
            options={[...Array(4)].map((v, i) => String(i))}
            text={"初期修正"}
            fourPoints={statusPoint[3]}
            onChange={e => {
              console.log(e);
              /* const { value } = e.currentTarget;
  onChangeInitBonus(3, value); */
            }}
          />
          <StatusPoints
            options={[...Array(21)].map((v, i) => String(i))}
            text={"成長修正"}
            fourPoints={statusPoint[4]}
            onChange={e => console.log(e.currentTarget.value)}
          />
          <StatusPoints
            options={[...Array(21)].map((v, i) => String(i))}
            text={"その他修正"}
            fourPoints={statusPoint[5]}
            onChange={e => console.log(e.currentTarget.value)}
          />
        </tbody>
      </table>
    </Section>
  );
};

export default StatusTable;

/* 
<OptionalSelector
value={syndrome[2]}
text={"オプショナル"}
options={kind}
onChange={e => console.log(e.currentTarget.value)}
/>
<SyndromeSelector
value={"--"}
text={"ワークス"}
options={works}
fourPoints={statusPoint[2]}
onChange={e => console.log(e.currentTarget.value)}
/>
<StatusPoints
options={[...Array(4)].map((v, i) => String(i))}
text={"初期修正"}
fourPoints={statusPoint[3]}
onChange={e =>
  onChangeStatus(4, [Number(e.currentTarget.value), 0, 0, 0])
}
/>
<StatusPoints
options={[...Array(21)].map((v, i) => String(i))}
text={"成長修正"}
fourPoints={statusPoint[4]}
onChange={e => console.log(e.currentTarget.value)}
/>
<StatusPoints
options={[...Array(21)].map((v, i) => String(i))}
text={"その他修正"}
fourPoints={statusPoint[5]}
onChange={e => console.log(e.currentTarget.value)}
/>
<ResultPoints text={"合計"} fourPoints={fourPoints} /> */
