import React from "react";
import Providers from "./state/Providers";
import Routing from "./route/Routing";

const App: React.FC = () => {
  return (
    <Providers>
      <Routing />
    </Providers>
  );
};

export default App;
