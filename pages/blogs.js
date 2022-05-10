import React, { useContext, useEffect } from "react";
import Head from "next/head";
import BlogItem from "../components/BlogItem";
import BlogContext from "../components/context/blog/blogContext";
import Footer from "../components/Footer";

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
      <Head>
        <title>FizzBuzz Blog - Our Blogs</title>
        <meta
          name="description"
          content="FizzBuzz is the personal blog to document learning experiences, Tips, Standard Procedures, Reusable components and links related to Web development, Data Analysis and Programming."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
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
