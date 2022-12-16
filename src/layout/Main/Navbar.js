import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div class="2xl:container 2xl:mx-auto">
        <div class="bg-white shadow-lg py-5 px-12">
          <nav class="flex justify-between">
            <div class="flex items-center space-x-3 lg:pr-16 pr-6">
              <Link to="/">
                <h2 class="font-normal text-2xl leading-6 text-gray-800">
                  TECHNO BLOG
                </h2>
              </Link>
            </div>

            <ul class="flex flex-auto space-x-2">
              <Link to="/history">
                <li class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-black border border-white bg-gray-200 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
                  History
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
