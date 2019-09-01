import React from "react";
import { Router, Route, Switch } from "react-router";
import MainPage from "../pages/MainPage";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Routing = () => {
  return (
    <Router history={history}>
      <Route exact path="/" component={MainPage} />
    </Router>
  );
};

export default Routing;
