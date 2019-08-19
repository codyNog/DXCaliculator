import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import Skill from "./state/SkillContainer";
import Exp from "./state/ExpContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Skill.Provider>
        <Exp.Provider>
          <MainPage />
        </Exp.Provider>
      </Skill.Provider>
    </div>
  );
};

export default App;
