import { loadBlog } from "../../action/blogAction";

const loadBlogData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("blog.json");
    const data = await res.json();

    if (data.length) {
      dispatch(loadBlog(data));
    }
  };
};

export default loadBlogData;
