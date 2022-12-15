import React, { useEffect } from "react";
// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
// import { Avatar, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import loadBlogData from "../../redux/thunk/blogs/fetchBlogs";

// const { Meta } = Card;

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs[0]);

  useEffect(() => {
    dispatch(loadBlogData());
  }, [dispatch]);
  return (
    <div className="container mx-auto md:grid grid-cols-2 gap-5">
      {blogs?.map((blog) => (
        <div class="p-4">
          <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
            <img
              class="lg:h-72 md:h-36 w-full object-cover object-center"
              src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/blog.jpg?alt=media&token=271cb624-94d4-468d-a14d-455377ba75c2"
              alt="blog cover"
            />

            <div class="p-4">
              <div className="mb-1">
                {blog.tags.map((tag) => (
                  <button class="bg-gray-200 tracking-widest text-xs font-bold text-violet-500  mr-2 uppercase rounded-full shadow-xl p-1.5">
                    {tag}
                  </button>
                ))}
              </div>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {blog.title}
              </h1>
              <div class="flex items-center flex-wrap ">
                <p class="text-green-800  md:mb-2 lg:mb-0">
                  <p class="inline-flex items-center">{blog.description}</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
