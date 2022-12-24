import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
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
export const removeBlog = (blog) => {
  return {
    type: DELETE_CONTENT,
    payload: blog._id,
  };
};
