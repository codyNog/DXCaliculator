import React from "react";
import { Section } from "../style";
import Heading from "../atoms/Heading";
import TextArea from "../atoms/TextArea";

const ProfileArea: React.FC = () => {
  const height = 100;
  return (
    <Section>
      <Heading text={"プロフィール"} />
      <TextArea style={{ height: height, minHeight: height }} />
    </Section>
  );
};

export default ProfileArea;
