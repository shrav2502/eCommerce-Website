import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./Homepage/Homepage";
import Kids from "./Kids";
import Men from "./Men";
import ProductDescription from "./ProductDescription";
import Women from "./Women";

function Root() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={"/"} component={App} />
          <Route path={"/women"} component={Women} />
          <Route path={"/men"} component={Men} />
          <Route path={"/kids"} component={Kids} />
          <Route path={"/description"} component={ProductDescription} />
        </Switch>
      </div>
    </Router>
  );
}

export default Root;
