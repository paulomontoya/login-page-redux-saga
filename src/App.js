import React from "react";
import css from "./App.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className={css.App}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={LoginPage} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
