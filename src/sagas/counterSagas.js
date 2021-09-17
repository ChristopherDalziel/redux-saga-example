import { takeEvery, call, put } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementAsync(action) {
  yield call(delay, 2000);
  yield put({ type: "INCREMENT_SUCCESS", payload: action.payload });
}

export function* watchIncrement() {
  yield takeEvery("INCREMENT_REQUEST", incrementAsync);
}

function* decrementAsync(action) {
  yield call(delay, 2000);
  yield put({ type: "DECREMENT_SUCCESS", payload: action.payload });
}

export function* watchDecrement() {
  yield takeEvery("DECREMENT_REQUEST", decrementAsync);
}
