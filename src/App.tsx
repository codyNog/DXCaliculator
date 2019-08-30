import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import State from "./state/StateContainer";

const App: React.FC = () => {
  return (
    <State.Provider>
      <MainPage />
    </State.Provider>
  );
};

export default App;
