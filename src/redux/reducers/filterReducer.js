import { TOGGLE_FILTER } from "../actionTypes/actionType";

const initialState = {
  filters: [],
};

const filterReducer = (state = initialState, action) => {
  const selectedFilter = state.filters.find(
    (filter) => filter === action.payload
  );
  switch (action.type) {
    case TOGGLE_FILTER:
      if (selectedFilter) {
        return {
          ...state,
          filters: state.filters.filter((filter) => filter !== action.payload),
        };
      }
      return {
        ...state,
        filters: [action.payload],
      };

    default:
      return state;
  }
};

export default filterReducer;
