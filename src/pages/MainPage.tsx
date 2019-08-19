import React from "react";
import { Page } from "../layout/Style";
import SkillDataGrid from "../organisms/SkillDataGrid";

const MainPage: React.FC = () => {
  return (
    <Page>
      <SkillDataGrid />
    </Page>
  );
};

export default MainPage;
