import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-span-2 bg-gray-300 shadow-lg h-screen p-5 rounded-lg">
      <ul className="flex gap-3  flex-col h-full">
        <li className="font-bold uppercase">Admin Dashboard</li>
        <li className="border-2 text-center rounded">
          <Link to="/dashboard">All Blog</Link>
        </li>
        <li className="border-2 text-center rounded">
          <Link to="add-blog">Add Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
