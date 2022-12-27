import React from "react";
import { useSelector } from "react-redux";

const History = () => {
  const blogs = useSelector((state) => console.log(state.history));
  return (
    <div>
      <h1>asdfasdfasdfasfdf</h1>
      <h1>asdfasdfasdfasfdf</h1>
      <h1>asdfasdfasdfasfdf</h1>
      <h1>asdfasdfasdfasfdf</h1>
      <h1>asdfasdfasdfasfdf</h1>
      <h1>asdfasdfasdfasfdf</h1>
    </div>
  );
};

export default History;
