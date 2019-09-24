import React from "react";
import Effect from "./container/effect";
import Status from "./container/status";
import Profile from "./container/profile";

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
