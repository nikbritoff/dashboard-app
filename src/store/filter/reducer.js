import { filterActionType } from "./actions";

const initialState = [];

export const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case filterActionType.add: {
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }
      return state;
    }
    case filterActionType.remove: {
      return state.filter(element => element !== action.payload);
    }
    case filterActionType.clear: {
      return [];
    }

    default: {
      return state;
    }
  }
};
