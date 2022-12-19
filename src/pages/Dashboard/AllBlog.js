import React from "react";
import { Space, Table } from "antd";

const AllBlog = () => {
  const columns = [
    {
      title: "Author Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="/">{text}</a>,
    },
    {
      title: "Blog Title",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Date & Time",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a href="/">Update</a>
          <a href="/">Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default AllBlog;
