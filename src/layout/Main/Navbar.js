import React from "react";

const Navbar = () => {
  return (
    <div>
      <div class="2xl:container 2xl:mx-auto">
        <div class="bg-slate-500 shadow-lg py-5 px-7">
          <nav class="flex justify-between">
            <div class="flex items-center space-x-3 lg:pr-16 pr-6">
              <h2 class="font-normal text-2xl leading-6 text-gray-800">
                TECHNO BLOG
              </h2>
            </div>

            <ul class="flex flex-auto space-x-2">
              <li
                onclick="selected()"
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded"
              >
                History
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
