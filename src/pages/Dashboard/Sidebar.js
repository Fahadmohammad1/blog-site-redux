import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-gray-300 shadow-lg h-[calc(100vh-25px)] p-5 rounded-lg">
      <ul className="flex gap-3  flex-col h-full">
        <li className="font-bold uppercase">Admin Dashboard</li>
        <li>
          <Link to="/dashboard">Blog List</Link>
        </li>
        <li>
          <Link to="post-blog">Post Blog</Link>
        </li>
        <li>
          <Link to="update-blog">Update Blog</Link>
        </li>
        <li className="mt-auto">
          <Link to="/"> Back to Home </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;