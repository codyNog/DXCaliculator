import React from "react";
import { Section } from "../style";
import TableRow from "../atoms/table/TableRow";
import SyndromeSelector from "../molecules/table/SyndromeSelector";
import Heading from "../atoms/Heading";
import StatusPoints from "../molecules/table/StatusPoints";
import OptionalSelector from "../molecules/table/OptionalSelector";
import Status from "../state/container/StatusContainer";
import TotalRow from "../molecules/table/TotalRow";
import { marginM } from "../style/variables";
import StatusController from "../molecules/table/StatusController";
import AbilityValue from "../molecules/table/AbilityValue";

const rows = ["", "", "肉体", "感覚", "精神", "社会"];
const syndromeKind = ["", "キュマイラ", "エンジェルハイロウ"];

const worksKind = ["", "小学生", "中学生", "高校生"];
const ability = ["", "", "HP", "侵蝕値", "行動値", "移動"];

const Table: React.FC = () => {
  const status = Status.useContainer();
  const {
    syndromeOne,
    syndromeTwo,
    syndromeThree,
    works,
    onChangeSyndromeOne,
    onChangeSyndromeTwo,
    setSyndromeThree,
    optionalOption,
    onChangeWorks,
    total,
    abilityValue,
    statusExp
  } = status;

  return (
    <Section
      style={{
        border: "solid 1px black ",
        position: "relative",
        display: "flex"
      }}
    >
      <Heading text={"ステータス"} />
      <table style={{ marginBottom: marginM }}>
        <tbody>
          <TableRow rows={rows} />
          <SyndromeSelector
            key={"Sselector1"}
            value={syndromeOne.syndrome}
            text={"シンドローム1"}
            options={syndromeKind}
            fourPoints={syndromeOne.statusPoint}
            onChange={e => {
              const { value } = e.currentTarget;
              onChangeSyndromeOne(value);
            }}
          />
          <SyndromeSelector
            key={"Sselector2"}
            value={syndromeTwo.syndrome}
            text={"シンドローム2"}
            options={syndromeKind}
            fourPoints={syndromeTwo.statusPoint}
            onChange={e => {
              const { value } = e.currentTarget;
              onChangeSyndromeTwo(value);
            }}
          />
          <OptionalSelector
            value={syndromeThree}
            text={"オプショナル"}
            options={optionalOption()}
            onChange={e => {
              const { value } = e.currentTarget;
              setSyndromeThree(value);
            }}
          />
          <SyndromeSelector
            key={"Sselector3"}
            value={works.works}
            text={"ワークス"}
            options={worksKind}
            fourPoints={works.statusPoint}
            onChange={e => {
              const { value } = e.currentTarget;
              onChangeWorks(value);
            }}
          />
          <StatusPoints
            role={"initial"}
            options={[...Array(4)].map((v, i) => String(i))}
            text={"初期修正"}
            id={3}
          />
          <StatusPoints
            role={"growth"}
            options={[...Array(21)].map((v, i) => String(i))}
            text={"成長修正"}
            id={4}
          />
          <StatusPoints
            role={"others"}
            options={[...Array(21)].map((v, i) => String(i))}
            text={"その他修正"}
            id={5}
          />
          <TotalRow text={"合計値"} fourPoints={total} />
          <TableRow rows={ability} />
          <AbilityValue fourPoints={abilityValue()} />
        </tbody>
      </table>
      <StatusController exp={statusExp} />
    </Section>
  );
};

const StatusTable: React.FC = () => {
  return (
    <Status.Provider>
      <Table />
    </Status.Provider>
  );
};

export default StatusTable;
