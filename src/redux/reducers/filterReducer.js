import { FILTER_BY_TAG, TOGGLE_FILTER } from "../actionTypes/actionType";

const initialState = {
  filters: [],
  tags: [],
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
    case FILTER_BY_TAG:
      if (!state.tags.includes(action.payload)) {
        return {
          ...state,
          tags: [...state.tags, action.payload],
        };
      } else {
        return {
          ...state,
          tags: state.tags.filter((tag) => tag !== action.payload),
        };
      }

    default:
      return state;
  }
};

export default filterReducer;
