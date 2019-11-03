import React from "react";
import { Section } from "../../style";
import Heading from "../atoms/Heading";
import Status from "../../state/container/status";
import SkillRow from "../molecules/SkillRow";
import SkillController from "../molecules/SkillController";
import { skillOptions } from "../../state/variables";

const SkillTable: React.FC = () => {
  const status = Status.useContainer();
  const {
    skill,
    addSkillRow,
    removeSkillRow,
    onChangeSkillName,
    onChangeSkillValue,
    skillExp
  } = status;

  return (
    <Section>
      <Heading text={"スキル"} />
      {skill.map((skill, i) => {
        const { name, value } = skill;
        const options = i > 3 ? skillOptions : [name];
        return (
          <SkillRow
            key={`skillRow${i}`}
            name={name}
            options={options}
            value={value}
            onChangeSelector={e => onChangeSkillName(e.currentTarget.value, i)}
            onChangeInput={e =>
              onChangeSkillValue(Number(e.currentTarget.value), i)
            }
          />
        );
      })}
      <SkillController
        add={addSkillRow}
        remove={removeSkillRow}
        skillExp={skillExp()}
      />
    </Section>
  );
};

export default SkillTable;
