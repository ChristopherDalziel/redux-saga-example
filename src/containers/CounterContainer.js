import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../actions";
import CounterComponent from "../components/CounterComponent";

const mapStateToProps = (state) => {
  return {
    state: state.counterReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (step) => {
      dispatch(incrementAction(step));
    },
    decrement: (step) => {
      dispatch(decrementAction(step));
    },
  };
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);

export default CounterContainer;
