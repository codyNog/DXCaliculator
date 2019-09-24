import React from "react";
import { Section } from "../style";
import Heading from "../atoms/Heading";
import Status from "../state/container/status";
import SkillRow from "../molecules/SkillRow";

const SkillTable: React.FC = () => {
  const status = Status.useContainer();
  const { skill } = status;

  return (
    <Section>
      <Heading text={"スキル"} />
      <SkillRow
        skill={skill}
        onChangeSelector={() => console.log("change")}
        onChangeInput={() => console.log("changeInput")}
      />
    </Section>
  );
};

export default SkillTable;
