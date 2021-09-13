import { all } from "redux-saga/effects";

import { watchIncrement, watchDecrement } from "./counterSagas";

export default function* rootSaga() {
  yield all([watchIncrement(), watchDecrement()]);
}
