import { combineReducers } from "redux";
import counterReducers from "./counterReducers";

const allReducers = combineReducers({
  counterReducers,
});

export default allReducers;
