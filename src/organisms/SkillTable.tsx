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
  const { skill } = status;

  return (
    <Section>
      <Heading text={"スキル"} />
      <Table>
        {skill.map(skill => {
          console.log(skill);
          //return <div>{skill.key}</div>;
        })}
      </Table>
    </Section>
  );
};

const SkillTable: React.FC = () => {
  return (
    <Status.Provider>
      <STable />
    </Status.Provider>
  );
};

export default SkillTable;
