import React from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import Main from "../components/pages/main";
import Pdf from "../components/pages/pdf";

const history = createBrowserHistory();

const Routing = () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={Main} />
      <Route exact path="/pdf" component={Pdf} />
    </Router>
  );
};

export default Routing;
