import {
  ADD_CONTENT,
  ADD_TO_HISTORY,
  DELETE_CONTENT,
  FILTER_BY_TAG,
  GET_CONTENT,
  TOGGLE_FILTER,
  UPDATE_CONTENT,
} from "../actionTypes/actionType";

export const loadBlog = (blogs) => {
  return {
    type: GET_CONTENT,
    payload: blogs,
  };
};

export const addBlog = (blog) => {
  return {
    type: ADD_CONTENT,
    payload: blog,
  };
};
export const removeBlog = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};
export const editBlog = (blog) => {
  return {
    type: UPDATE_CONTENT,
    payload: blog,
  };
};
export const addToHistory = (blog) => {
  return {
    type: ADD_TO_HISTORY,
    payload: blog,
  };
};

export const filterBlog = (filter) => {
  return {
    type: TOGGLE_FILTER,
    payload: filter,
  };
};

export const filterByTag = (tag) => {
  return {
    type: FILTER_BY_TAG,
    payload: tag,
  };
};
