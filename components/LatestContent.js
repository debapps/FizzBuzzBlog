import React, { useContext, useEffect } from "react";
import BlogCard from "./BlogCard";
import BlogContext from "./context/blog/blogContext";

export default function LatestContent() {
  // Get the blog context.
  let blogContext = useContext(BlogContext);
  const { blogs, fetchAllBlogs } = blogContext;

  // Fetch all the blogs using useEffect hook.
  useEffect(() => {
    fetchAllBlogs();
    // eslint-disable-next-line
  }, [blogs]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center items-center text-center w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Our Latest Blogs
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {blogs.map((blog, idx) => {
            return <BlogCard key={idx} blog={blog} />;
          })}
        </div>
      </div>
    </section>
  );
}
