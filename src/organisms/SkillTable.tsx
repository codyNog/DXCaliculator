import React from "react";
import { Section, Table } from "../style";
import Heading from "../atoms/Heading";
import Status from "../state/container/StatusContainer";
import SkillRow from "../molecules/SkillRow";

const STable: React.FC = () => {
  const status = Status.useContainer();
  const { skill } = status;

  return (
    <Section>
      <Heading text={"スキル"} />
      <SkillRow skill={skill} />
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
