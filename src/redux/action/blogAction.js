import { GET_CONTENT } from "../actionTypes/actionType";

export const loadBlog = (blogs) => {
  return {
    type: GET_CONTENT,
    payload: blogs,
  };
};
