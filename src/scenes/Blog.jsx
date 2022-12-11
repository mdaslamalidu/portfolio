import React from "react";
import LineGradient from "../components/LineGradient";

const Blog = () => {
  return (
    <div className="my-24">
      <p className="font-playfair font-semibold text-5xl my-4 text-center">
        <span className="text-red">MY </span>BLOGS
      </p>
      <div className="flex justify-center">
        <LineGradient width="w-[120px]" />
      </div>
      <div className="my-24">
        <h2 className="text-4xl font-bold text-center">Comming soon......</h2>
      </div>
    </div>
  );
};

export default Blog;
