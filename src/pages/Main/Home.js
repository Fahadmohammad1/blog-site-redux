import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadBlogData from "../../redux/thunk/blogs/fetchBlogs";
import { filterBlog } from "../../redux/action/blogAction";
import BlogCard from "../../components/BlogCard";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state?.blog?.blogs);

  const filter = useSelector((state) => state.filter.filters);

  useEffect(() => {
    dispatch(loadBlogData());
  }, [dispatch]);

  let content;

  if (blogs.length) {
    content = (
      <div className="container mx-auto md:grid grid-cols-2 gap-5">
        {blogs?.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    );
  }

  // if (blogs.length && filter.includes("last")) {
  //   <div className="container mx-auto md:grid grid-cols-2 gap-5">
  //     {blogs
  //       ?.sort((a, b) => new Date(a.date) - new Date(b.date))
  //       .map((blog) => (
  //         <blogCard></blogCard>
  //       ))}
  //   </div>;
  // }
  return (
    <div>
      <div className="container mx-auto flex px-4 pt-4 gap-2 justify-end">
        <button
          onClick={() => dispatch(filterBlog("last"))}
          className="shadow-lg bg-gray-300 font-bold p-1 rounded-lg uppercase"
        >
          sort by last upload
        </button>
        <button
          onClick={() => dispatch(filterBlog("first"))}
          className="shadow-lg bg-gray-300 font-bold p-1 rounded-lg uppercase"
        >
          sort by First upload
        </button>
      </div>
      {content}
    </div>
  );
};

export default Home;
