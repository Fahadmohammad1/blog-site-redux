import React, { useEffect } from "react";
import { Button, Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import loadBlogData from "../../redux/thunk/blogs/fetchBlogs";

const AllBlog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs[0]);
  console.log(blogs);

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
      render: (_, record) => (
        <Space size="small">
          <Button type="default">Update</Button>
          <Button type="default" danger ghost>
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
