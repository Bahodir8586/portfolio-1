import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import Company from "./containers/Companies/Company/Company";

import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/uzmobile" component={Company} />
          <Route path="/ucell" component={Company} />
          <Route path="/beeline" component={Company} />
          <Route path="/ums" component={Company} />
          <Route path="/perfectum" component={Company} />
          <Route path="/paynet" component={Company} />
          <Route path="/company" component={Company} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
