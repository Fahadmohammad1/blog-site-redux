import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const History = () => {
  const history = useSelector((state) => state.history);

  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto md:grid grid-cols-3 gap-5">
        {history
          ?.sort((a, b) => b - a)
          .map((blog) => (
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
                  </div>
                </div>
                <img
                  class="lg:h-72 md:h-auto w-full object-cover object-center"
                  src={blog.image}
                  alt="blog cover"
                />

                <div class="p-4">
                  {/* <div className="mb-1">
                {blog.tags.map((tag) => (
                  <button class="bg-gray-200 tracking-widest text-xs font-medium text-violet-500  mr-2 uppercase rounded-full shadow-xl p-1.5 hover:bg-teal-300 hover:text-black">
                    {tag}
                  </button>
                ))}
              </div> */}
                  <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                    {blog.title}
                  </h1>
                  <div
                    onClick={() => navigate(`/blog/${blog._id}`)}
                    class="flex items-center flex-wrap cursor-pointer"
                  >
                    <p class="text-green-800  md:mb-2 lg:mb-0">
                      <p class="inline-flex items-center">
                        {blog.description.slice(0, 150)}...
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default History;
