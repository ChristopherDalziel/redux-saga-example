import { INCREMENT_REQUEST, DECREMENT_REQUEST } from "./actionTypes";

export const incrementAction = (step) => {
  return {
    type: INCREMENT_REQUEST,
    payload: {
      step: step,
    },
  };
};

export const decrementAction = (step) => {
  return {
    type: DECREMENT_REQUEST,
    payload: {
      step: step,
    },
  };
};
