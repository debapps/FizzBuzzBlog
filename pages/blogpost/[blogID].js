import { useRouter } from "next/router";
import React, { useContext } from "react";
import BlogContext from "../../components/context/blog/blogContext";

const Blog = () => {
  // Get the blog context.
  let blogContext = useContext(BlogContext);
  const { blogs } = blogContext;

  // Get the blog ID.
  const router = useRouter();
  const { blogID } = router.query;

  // Get the specific blogpost based on the blog ID.
  let blogPost = blogs.find((blog) => {
    return blog._id === blogID;
  });

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col w-full mb-12">
        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font mb-4 text-gray-900">
          {blogPost.title}
        </h1>
        <p className="lg:w-2/3 mx-auto mb-2 leading-relaxed text-left text-base italic">
          {blogPost.introduction}
        </p>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-left text-base">
          {blogPost.content}
        </p>
      </div>
    </div>
  );
};

export default Blog;
