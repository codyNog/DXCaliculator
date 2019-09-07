import React from "react";
import { Section } from "../style";
import Heading from "../atoms/Heading";
import TextArea from "../atoms/TextArea";
import Profile from "../state/container/ProfileContainer";

const Area: React.FC = () => {
  const profile = Profile.useContainer();
  const { onChangeProfile } = profile;
  const height = 100;
  return (
    <Section>
      <Heading text={"プロフィール"} />
      <TextArea
        style={{ height: height, minHeight: height }}
        onChange={e => {
          const { value } = e.currentTarget;
          onChangeProfile(value);
        }}
      />
    </Section>
  );
};

const ProfileArea: React.FC = () => {
  return (
    <Profile.Provider>
      <Area />
    </Profile.Provider>
  );
};

export default ProfileArea;
