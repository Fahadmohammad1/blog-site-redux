import { loadBlog } from "../../action/blogAction";

const loadBlogData = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://moon-tech-server-tau.vercel.app/products");
    const data = await res.json();

    console.log(data);

    if (data.length) {
      dispatch(loadBlog(data));
    }
  };
};

export default loadBlogData;
