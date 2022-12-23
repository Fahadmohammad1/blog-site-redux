import { addBlog } from "../../action/blogAction";

const postBlogData = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://moon-tech-server-tau.vercel.app/blog", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();

    if (data.acknowledged) {
      dispatch(
        addBlog({
          _id: data.insertedId,
          ...blog,
        })
      );
    }
  };
};

export default postBlogData;
