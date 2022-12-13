import { LOAD_BLOG } from "../actionTypes/actionType";

export const loadBlog = (blogs) => {
  return {
    type: LOAD_BLOG,
    payload: blogs,
  };
};
