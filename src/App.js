import React from "react";
import css from "./App.module.scss";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import DashboardPage from "./components/DashboardPage";

function App() {
  return (
    <div className={css.App}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact={true} component={LoginPage} />
            <Route path="/dashboard" component={DashboardPage} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
