import { loadBlog } from "../../action/blogAction";

const loadBlogData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://moon-tech-server-tau.vercel.app/blogs");
    const data = await res.json();

    if (data.data.length) {
      dispatch(loadBlog(data.data));
    }
  };
};

export default loadBlogData;
