import React from "react";
import css from "./App.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div className={css.App}>
      <Router>
        <Switch>
          <Route path="/" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
