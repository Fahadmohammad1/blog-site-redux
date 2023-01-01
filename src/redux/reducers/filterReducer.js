import { TOGGLE_FILTER } from "../actionTypes/actionType";

const initialState = {
  filters: [],
};

const filterReducer = (state = initialState, action) => {
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

export default filterReducer;
