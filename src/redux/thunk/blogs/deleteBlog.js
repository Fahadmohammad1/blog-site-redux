import { removeBlog } from "../../action/blogAction";

const deleteBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://moon-tech-server-tau.vercel.app/blog/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = res.json();
    console.log(data);

    if (data.acknowledged) {
      dispatch(removeBlog(id));
    }
  };
};

export default deleteBlog;
