import React from "react";
import SkillDataGrid from "../../organisms/SkillDataGrid";
import StatusTable from "../../organisms/StatusTable";
import ProfileArea from "../../organisms/ProfileArea";

const MainIndex: React.FC = () => {
  return (
    <div>
      <StatusTable />
      <SkillDataGrid />
      <ProfileArea />
    </div>
  );
};

export default MainIndex;
