import { ADD_CONTENT, GET_CONTENT } from "../actionTypes/actionType";

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
