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
            <h1 className="font-oswald sm:text-4xl text-3xl mb-4 font-medium text-indigo-500 hover:text-purple-500">
              Our Latest Blogs
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {blogs.slice(0, 4).map((blog, idx) => {
            return <BlogCard key={idx} blog={blog} />;
          })}
        </div>
      </div>
    </section>
  );
}
