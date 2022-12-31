import {
  ADD_CONTENT,
  ADD_TO_HISTORY,
  DELETE_CONTENT,
  GET_CONTENT,
  UPDATE_CONTENT,
} from "../actionTypes/actionType";

const initialState = {
  blogs: [],
  history: [],
};

const blogReducer = (state = initialState, action) => {
  const selectedBlog = state.history.find(
    (blog) => blog._id === action.payload._id
  );
  switch (action.type) {
    case GET_CONTENT:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_CONTENT:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case DELETE_CONTENT:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };
    case UPDATE_CONTENT:
      return {
        ...state,
        blogs: Object.assign(state.blogs, action.payload),
      };
    case ADD_TO_HISTORY:
      if (selectedBlog) {
        const newBlogs = state.history.filter(
          (blog) => blog._id !== selectedBlog._id
        );
        return {
          ...state,
          history: [selectedBlog, ...newBlogs],
        };
      }
      return {
        ...state,
        history: [action.payload, ...state.history],
      };

    default:
      return state;
  }
};

export default blogReducer;
