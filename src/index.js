import React from "react";
import ReactDOM from "react-dom";

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// Redux saga
import createSagaMiddleware from "@redux-saga/core";

import CounterContainer from "./containers/CounterContainer";
import allReducers from "./reducers";
import rootSaga from "./sagas/rootSaga";

// Middleware
const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById("root")
);
