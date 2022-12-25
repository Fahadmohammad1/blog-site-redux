const updateBlog = (blog) => {
  return async (dispatch, getState) => {
    const res = fetch(
      `https://moon-tech-server-tau.vercel.app/blog/${blog._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(blog),
      }
    );
    const data = res.json();
    console.log(data);
  };
};

export default updateBlog;
