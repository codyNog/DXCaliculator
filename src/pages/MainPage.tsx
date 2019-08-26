import React from "react";
import MainIndex from "../templates/main";
import { Page } from "../style";
import Header from "../templates/header";

const MainPage: React.FC = () => {
  return (
    <Page>
      <Header />
      <MainIndex />
    </Page>
  );
};

export default MainPage;
