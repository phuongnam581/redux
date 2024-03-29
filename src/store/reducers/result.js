import * as actionTypes from "../actions/actions";
import { updatedObject } from "../utility";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      const updatedArray = state.results.concat({
        id: new Date(),
        value: action.result
      });
      updatedObject(state, updatedArray);
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1)
      const updatedArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      updatedObject(state, updatedArray);
  }
  return state;
};

export default reducer;
