import React from "react";
import { Section, Table } from "../style";
import TableRow from "../atoms/table/TableRow";
import SyndromeSelector from "../molecules/table/SyndromeSelector";
import Heading from "../atoms/Heading";
import StatusPoints from "../molecules/table/StatusPoints";
import OptionalSelector from "../molecules/table/OptionalSelector";
import Status from "../state/container/StatusContainer";
import TotalRow from "../molecules/table/TotalRow";
import { marginM, marginL } from "../style/variables";
import StatusController from "../molecules/table/StatusController";
import AbilityValue from "../molecules/table/AbilityValue";
import {
  rows,
  syndromeKind,
  worksKind,
  ability,
  urgeKind,
  awakenKind
} from "../state/variables";

const STable: React.FC = () => {
  const status = Status.useContainer();
  const {
    syndromeOne,
    syndromeTwo,
    syndromeThree,
    awaken,
    urge,
    works,
    onChangeSyndromeOne,
    onChangeSyndromeTwo,
    setSyndromeThree,
    setAwaken,
    setUrge,
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
      <Table style={{ marginBottom: marginL }}>
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
        {syndromeOne.syndrome !== syndromeTwo.syndrome ? (
          <OptionalSelector
            value={syndromeThree}
            text={"オプショナル"}
            options={optionalOption()}
            onChange={e => {
              const { value } = e.currentTarget;
              setSyndromeThree(value);
            }}
          />
        ) : null}
        <OptionalSelector
          value={awaken}
          text={"覚醒"}
          options={awakenKind}
          onChange={e => {
            const { value } = e.currentTarget;
            console.log(value);
            setAwaken(value);
          }}
        />
        <OptionalSelector
          value={urge}
          text={"衝動"}
          options={urgeKind}
          onChange={e => {
            const { value } = e.currentTarget;
            console.log(value);
            setUrge(value);
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
        />
        <StatusPoints
          role={"growth"}
          options={[...Array(21)].map((v, i) => String(i))}
          text={"成長修正"}
        />
        <StatusPoints
          role={"others"}
          options={[...Array(21)].map((v, i) => String(i))}
          text={"その他修正"}
        />
        <TotalRow text={"合計値"} fourPoints={total} />
      </Table>
      <Table>
        <TableRow rows={ability} />
        <AbilityValue fourPoints={abilityValue()} />
      </Table>
      <StatusController exp={statusExp} />
    </Section>
  );
};

const StatusTable: React.FC = () => {
  return (
    <Status.Provider>
      <STable />
    </Status.Provider>
  );
};

export default StatusTable;
