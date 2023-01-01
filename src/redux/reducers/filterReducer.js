import { TOGGLE_FILTER } from "../actionTypes/actionType";

const initialState = {
  filters: [],
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.payload],
      };

    default:
      return state;
  }
};
