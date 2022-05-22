import { useRouter } from "next/router";
import React, { useContext } from "react";
import BlogContext from "../../components/context/blog/blogContext";
import AuthContext from "../../components/context/auth/authContext";
import { formatDate } from "../../utilities/dateFormat";
import Link from "next/link";
import Image from "next/image";
import HeadComponent from "../../components/HeadComponent";
import { AiFillDelete } from "react-icons/ai";

const Blog = () => {
  // Get the blog context.
  let blogContext = useContext(BlogContext);
  const { blogs, deleteBlogPost } = blogContext;

  // Get the auth context.
  let authContext = useContext(AuthContext);
  const { authToken } = authContext;

  // Get the blog ID.
  const router = useRouter();
  const { blogID } = router.query;

  // Get the specific blogpost based on the blog ID.
  let blogPost = blogs.find((blog) => {
    return blog._id === blogID;
  });

  // This function sets the HTML text.
  function setHTML(htmlText) {
    return { __html: htmlText };
  }

  // This Function deletes the specific blog post.
  async function handleDelete() {
    // Delete the blog post.
    let { success, message } = await deleteBlogPost(blogID);

    // Show the response.
    if (success) {
      alert(message);
      router.push("/blogs");
    } else {
      alert(message);
    }
  }

  return (
    <>
      <HeadComponent title={`FizzBuzz.Blog - ${blogPost.title}`} />
      <main className="container px-5 py-10 mb-64 mx-auto">
        {authToken && (
          <div className="lg:w-2/5 inline-flex lg:justify-end mb-5">
            <button
              onClick={handleDelete}
              className="inline-flex ml-2 bg-indigo-500 hover:bg-purple-500 text-white text-2xl items-center border-0 p-3 focus:outline-none rounded-full mt-4 md:mt-0"
            >
              <AiFillDelete />
            </button>
          </div>
        )}
        <div className="flex flex-col w-full mb-12">
          <h1 className="sm:text-3xl text-center text-2xl font-medium font-oswald mb-4 text-gray-900">
            {blogPost.title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-5 text-center font-zilla font-semibold text-sm mb-5">
            Published on: {formatDate(blogPost.dateCreated)} | Written by -{" "}
            {blogPost.author}
          </p>
          <p className="lg:w-2/3 mx-auto mb-2 leading-relaxed text-left text-base font-montserrat text-slate-600 italic">
            {blogPost.introduction}
          </p>
          <div className="mx-auto my-10 w-fit">
            <Image
              className="object-cover object-center rounded-lg"
              src={blogPost.blogImageURL}
              alt="Blog Image"
              width={800}
              height={400}
            />
          </div>

          <p
            dangerouslySetInnerHTML={setHTML(blogPost.content)}
            className="preview"
          ></p>
          <div className="mx-auto my-10">
            <Link href={"/blogs"} passHref>
              <a className="w-fit font-montserrat font-semibold text-white bg-indigo-500 hover:bg-purple-500 border-2 hover:border-black py-2 px-8 focus:outline-none rounded-lg text-lg">
                Read more blogs
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
