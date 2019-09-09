import React from "react";
import Effect from "./container/EffectContainer";
import Status from "./container/StatusContainer";
import Profile from "./container/ProfileContainer";

const Providers: React.FC = props => {
  const { children } = props;
  return (
    <Profile.Provider>
      <Status.Provider>
        <Effect.Provider>{children}</Effect.Provider>
      </Status.Provider>
    </Profile.Provider>
  );
};

export default Providers;
