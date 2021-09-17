import {
  INCREMENT_REQUEST,
  INCREMENT_SUCCESS,
  INCREMENT_FAILURE,
  DECREMENT_REQUEST,
  DECREMENT_SUCCESS,
  DECREMENT_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  value: 0,
  loading: null,
  error: null,
};

const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUEST:
      return { ...state, loading: true, error: null };
    case INCREMENT_SUCCESS:
      return {
        ...state,
        value: state.value + action.payload.step,
        loading: false,
        error: null,
      };
    case INCREMENT_FAILURE:
      return { ...state, error: action.error };
    case DECREMENT_REQUEST:
      return { ...state, loading: true, error: null };
    case DECREMENT_SUCCESS:
      return {
        ...state,
        value: state.value - action.payload.step,
        loading: false,
        error: null,
      };
    case DECREMENT_FAILURE:
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export default counterReducers;
