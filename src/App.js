import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, persistor, history } from "./store";
import DashboardPage from "./components/DashboardPage";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" exact={true} component={LoginPage} />
            <Route path="/dashboard" component={DashboardPage} />
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
