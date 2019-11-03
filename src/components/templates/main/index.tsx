import React from "react";
import SkillDataGrid from "../../organisms/SkillDataGrid";
import StatusTable from "../../organisms/StatusTable";
import SkillTable from "../../organisms/SkillTable";
import ProfileArea from "../../organisms/ProfileArea";
import Providers from "../../../state/Providers";
import Header from "../../organisms/header";

const MainIndex: React.FC = () => {
  return (
    <Providers>
      <Header />
      <StatusTable />
      <SkillDataGrid />
      <SkillTable />
      <ProfileArea />
    </Providers>
  );
};

export default MainIndex;
