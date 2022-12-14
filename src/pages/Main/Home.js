import React, { useEffect } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import loadBlogData from "../../redux/thunk/blogs/fetchBlogs";

const { Meta } = Card;

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs[0]);

  useEffect(() => {
    dispatch(loadBlogData());
  }, [dispatch]);
  return (
    <div className="container mx-auto grid grid-cols-3 gap-5">
      {blogs?.map((blog) => (
        <Card
          style={{
            width: 300,
            boxShadow: "10px 10px 2px 1px rgba(0, 0, 255, .2)",
            marginRight: "auto",
            marginLeft: "auto",
          }}
          cover={<img alt="example" src={blog.image} />}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="" />}
            title={blog.title}
            description={blog.description.slice(0, 80)}
          />
        </Card>
      ))}
    </div>
  );
};

export default Home;
