import { takeEvery, call, put } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementAsync() {
  yield call(delay, 2000);
  yield put({ type: "INCREMENT_SUCCESS" });
}

export function* watchIncrement() {
  yield takeEvery("INCREMENT_REQUEST", incrementAsync);
}

function* decrementAsync() {
  yield call(delay, 2000);
  yield put({ type: "DECREMENT_SUCCESS" });
}

export function* watchDecrement() {
  yield takeEvery("DECREMENT_REQUEST", decrementAsync);
}
