import { ADD_CONTENT, GET_CONTENT } from "../actionTypes/actionType";

const initialState = {
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    default:
      return state;
  }
};

export default blogReducer;
