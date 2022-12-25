import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
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
