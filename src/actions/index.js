import { INCREMENT, DECREMENT } from "./actionTypes";

export const incrementAction = (step) => {
  return {
    type: INCREMENT,
    step: step,
  };
};

export const decrementAction = (step) => {
  return {
    type: DECREMENT,
    step: step,
  };
};
