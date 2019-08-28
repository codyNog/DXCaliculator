import React, { useState } from "react";
import { Section } from "../style";
import TableRow from "../atoms/table/TableRow";
import SyndromeSelector from "../molecules/table/SyndromeSelector";
import Heading from "../atoms/Heading";
import StatusPoints from "../molecules/table/StatusPoints";
import OptionalSelector from "../molecules/table/OptionalSelector";
import ResultPoints from "../molecules/table/ResultPoints";

const status = ["", "", "肉体", "感覚", "精神", "社会"];

const kind = ["キュマイラ", "エンジェルハイロウ", ""];

const works = ["小学生", "中学生", "高校生"];

const fourPoints = [...Array(4)].map(() => 0);
const fourPointsArray = [...Array(6)].map(() => fourPoints);

const state = {
  syndrome: [kind[0], kind[0], "--"],
  statusPoint: [...Array(6)].map(() => fourPoints)
};

const syndromeStatus = (syndrome: string): number[] => {
  switch (syndrome) {
    case kind[0]:
      return [3, 0, 0, 1];
    case kind[1]:
      return [0, 3, 1, 0];
    default:
      return [0, 0, 0, 0];
  }
};

const StatusTable: React.FC = () => {
  const [status, setStatus] = useState(state)
  const { syndrome, statusPoint } = status;

  const changeSyndrome = (index:number, value: string) => {
    const array = syndrome
    array.splice(index, 1 , value)
    return array
  }

  const changeStatusPoint = (index: number, value: number[]) => {
    const array = statusPoint
    array.splice(index, 1 , value)
    return array
  }


  const onChangeSelector = (index: number, value: number[]) => {
    const result ={
      syndrome: changeSyndrome(index, value),
      statusPoint: 
    }
  }

/*   const onChangeStatus = (column:number,index: number, value: number[]) => {
    statusPoint[column].splice(index, 1, value);
    setStatus(statusPoint);
  }; */

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
            value={syndrome[0]}
            text={"シンドローム1"}
            options={kind}
            fourPoints={statusPoint[0]}
            onChange={e => {
              const { value } = e.currentTarget;
              onChangeStatus(0, syndromeStatus(value));
            }}
          />
        
        </tbody>
      </table>
    </Section>
  );
};

export default StatusTable;


/* <SyndromeSelector
value={syndrome[1]}
text={"シンドローム2"}
options={kind}
fourPoints={statusPoint[1]}
onChange={e => console.log(e.currentTarget.value)}
/>
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