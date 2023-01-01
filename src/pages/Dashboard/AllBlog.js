import React, { useEffect } from "react";
import { Button, Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import loadBlogData from "../../redux/thunk/blogs/fetchBlogs";
import deleteBlog from "../../redux/thunk/blogs/deleteBlog";
import { useNavigate } from "react-router-dom";

const AllBlog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state?.blog?.blogs);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(loadBlogData());
  }, [dispatch]);

  const columns = [
    {
      title: "Author Name",
      dataIndex: "authorName",
      key: "authorName",
      render: (authorName) => <span>{authorName}</span>,
    },
    {
      title: "Blog Title",
      dataIndex: "title",
      key: "title",
      render: (title) => (
        <span className="text-ellipsis text-justify">{title}</span>
      ),
    },
    {
      title: "Date & Time",
      dataIndex: "dateAndTime",
      key: "date",
    },

    {
      title: "Action",
      key: "action",
      render: (_, blog) => (
        <Space size="small">
          <Button
            onClick={() => navigate(`/edit-blog/${blog._id}`)}
            type="default"
          >
            Update
          </Button>
          <Button
            onClick={() => dispatch(deleteBlog(blog._id))}
            type="default"
            danger
            ghost
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={blogs} />
    </div>
  );
};

export default AllBlog;
