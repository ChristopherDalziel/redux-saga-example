import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import CounterContainer from "./containers/CounterContainer";
import allReducers from "./reducers";

let store = createStore(allReducers);

const App = (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
