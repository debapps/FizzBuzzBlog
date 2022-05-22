import React, { useContext, useEffect } from "react";
import BlogItem from "../components/BlogItem";
import BlogContext from "../components/context/blog/blogContext";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";

export default function Blogs() {
  // Get the blog context.
  let blogContext = useContext(BlogContext);
  const { blogs, fetchAllBlogs } = blogContext;

  // Fetch all the blogs using useEffect hook.
  useEffect(() => {
    fetchAllBlogs();
    // eslint-disable-next-line
  }, [blogs]);

  return (
    <>
      <HeadComponent title="FizzBuzz.Blog - Our Blogs" />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {blogs.map((blog, idx) => {
            return <BlogItem key={idx} blog={blog} />;
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
