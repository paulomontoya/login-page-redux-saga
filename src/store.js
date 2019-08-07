import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./reducers";
import rootSaga from "./sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

export default store;
