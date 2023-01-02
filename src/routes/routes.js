import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import Blog from "../pages/Blog/Blog";
import AddBlog from "../pages/Dashboard/AddBlog";
import AllBlog from "../pages/Dashboard/AllBlog";
import EditBlog from "../pages/EditBlog/EditBlog";

import History from "../pages/History/History";
import Home from "../pages/Main/Home";
import UserPost from "../pages/UserPost/UserPost";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/user-post",
        element: <UserPost />,
      },
      {
        path: "/edit-blog/:id",
        element: <EditBlog />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <AllBlog />,
          },
          {
            path: "/dashboard/addBlog",
            element: <AddBlog />,
          },
        ],
      },
    ],
  },
]);

export default routes;
