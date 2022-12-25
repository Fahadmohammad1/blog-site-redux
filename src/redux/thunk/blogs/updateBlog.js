import { editBlog } from "../../action/blogAction";

const updateBlog = (blog, id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://moon-tech-server-tau.vercel.app/blog/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(blog),
      }
    );
    const data = await res.json();
    console.log(data);

    if (data.modifiedCount > 0) {
      dispatch(
        editBlog({
          _id: id,
          ...blog,
        })
      );
    }
  };
};

export default updateBlog;
