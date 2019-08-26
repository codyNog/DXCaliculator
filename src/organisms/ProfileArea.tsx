import React from "react";
import { Section } from "../style";
import Heading from "../atoms/Heading";
import TextArea from "../atoms/TextArea";

const ProfileArea: React.FC = () => {
  return (
    <Section>
      <Heading text={"プロフィール"} />
      <TextArea height={100} />
    </Section>
  );
};

export default ProfileArea;
