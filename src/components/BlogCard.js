import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToHistory, filterByTag } from "../redux/action/blogAction";
import deleteBlog from "../redux/thunk/blogs/deleteBlog";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = (blog) => {
    navigate(`/blog/${blog._id}`);
    dispatch(addToHistory(blog));
  };

  const deleteBlogByUser = (id) => {
    alert("Are you sure?");
    if (alert) {
      dispatch(deleteBlog(id));
    }
  };

  return (
    <div class="p-4">
      <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
        <div class="w-full">
          <div class="w-full flex p-2">
            <div class="p-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU"
                alt="author"
                class="w-10 h-10 rounded-full overflow-hidden"
              />
            </div>
            <div class="pl-2 pt-2 ">
              <p class="font-bold">{blog.authorName}</p>
              <p class="text-xs">
                {blog.date} - {blog.time}
              </p>
            </div>
            {pathname === "/" && (
              <div className="ml-auto flex items-center">
                <FaEdit
                  onClick={() => navigate(`/edit-blog/${blog._id}`)}
                  title="Edit"
                  className="text-2xl text-cyan-500 cursor-pointer"
                />
                <RiDeleteBin5Fill
                  onClick={() => deleteBlogByUser(blog._id)}
                  title="Delete"
                  className="text-2xl ml-2 text-red-600 cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>
        <img
          class="lg:h-72 md:h-36 w-full object-cover object-center"
          src={blog.image}
          alt="blog cover"
        />

        <div class="p-4">
          <div className="mb-1">
            {blog?.tags?.map((tag) => (
              <button
                onClick={() => dispatch(filterByTag(tag))}
                class="bg-gray-200 tracking-widest text-xs font-medium text-violet-500  mr-2 uppercase rounded-full shadow-xl p-1.5 hover:bg-teal-300 hover:text-black"
              >
                {tag}
              </button>
            ))}
          </div>
          <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
            {blog.title}
          </h1>
          <div
            class="flex items-center flex-wrap cursor-pointer"
            onClick={() => handleClick(blog)}
          >
            <div class="text-green-800  md:mb-2 lg:mb-0">
              <p class="inline-flex items-center">
                {blog.description.slice(0, 150)}...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
