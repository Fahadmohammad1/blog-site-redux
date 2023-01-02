import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadBlogData from "../../redux/thunk/blogs/fetchBlogs";
import { filterBlog } from "../../redux/action/blogAction";
import BlogCard from "../../components/BlogCard";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state?.blog?.blogs);

  const filter = useSelector((state) => state.filter.filters);
  const tags = useSelector((state) => state.filter.tags);
  console.log(tags);

  const activeClass =
    "shadow-lg bg-cyan-400 font-bold p-1 rounded-lg uppercase";

  const first = filter.includes("first");
  const last = filter.includes("last");

  useEffect(() => {
    dispatch(loadBlogData());
  }, [dispatch, filter]);

  let content;

  if (blogs.length) {
    content = (
      <div className="container mx-auto md:grid grid-cols-2 gap-5">
        {blogs?.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    );
  }

  if (blogs.length && filter.length && filter.includes("last")) {
    content = (
      <div className="container mx-auto md:grid grid-cols-2 gap-5">
        {blogs
          ?.sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
      </div>
    );
  }

  if (blogs.length && filter.includes("first")) {
    content = (
      <div className="container mx-auto md:grid grid-cols-2 gap-5">
        {blogs
          ?.sort((a, b) => new Date(a.date) - new Date(b.date))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
      </div>
    );
  }

  if (blogs.length && tags.length) {
    const newBlogs = blogs.find((blog) => blog.tags.includes(tags));
    console.log(newBlogs);
  }
  return (
    <div>
      <div className="container mx-auto flex px-4 pt-4 gap-2 justify-end">
        <button
          onClick={() => dispatch(filterBlog("last"))}
          className={
            !last
              ? "shadow-lg bg-gray-300 font-bold p-1 rounded-lg uppercase"
              : activeClass
          }
        >
          sort by last upload
        </button>
        <button
          onClick={() => dispatch(filterBlog("first"))}
          className={
            !first
              ? "shadow-lg bg-gray-300 font-bold p-1 rounded-lg uppercase"
              : activeClass
          }
        >
          sort by First upload
        </button>
      </div>
      {content}
    </div>
  );
};

export default Home;
