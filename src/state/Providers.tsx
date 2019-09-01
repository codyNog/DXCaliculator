import React from "react";
import Skill from "./container/SkillContainer";
import Status from "./container/StatusContainer";
import Profile from "./container/ProfileContainer";

const Providers: React.FC = props => {
  const { children } = props;
  return (
    <Profile.Provider>
      <Status.Provider>
        <Skill.Provider>{children}</Skill.Provider>
      </Status.Provider>
    </Profile.Provider>
  );
};

export default Providers;
