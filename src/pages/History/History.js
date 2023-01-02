import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";

const History = () => {
  const history = useSelector((state) => state?.blog?.history);

  return (
    <>
      <div className="container mx-auto md:grid grid-cols-3 gap-5">
        {history?.sort().map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default History;
