import * as actionTypes from "../actions/actions";
import { updatedObject } from "../utility";
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      updatedObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      updatedObject(state, { counter: state.counter + action.val });
    case actionTypes.SUBTRACT:
      updatedObject(state, { counter: state.counter - action.val });
  }
  return state;
};

export default reducer;
