import { useRouter } from "next/router";
import Head from "next/head";
import React, { useContext } from "react";
import BlogContext from "../../components/context/blog/blogContext";
import { formatDate } from "../../utilities/dateFormat";
import Link from "next/link";
import Image from "next/image";

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

  // This function sets the HTML text.
  function setHTML(htmlText) {
    return { __html: htmlText };
  }

  return (
    <>
      <Head>
        <title>FizzBuzz Blog - {blogPost.title}</title>
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
      <main className="container px-5 py-10 mb-64 mx-auto">
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
              <a className="w-fit font-montserrat font-semibold text-white bg-indigo-500 hover:bg-purple-500 border-2 hover:border-black py-2 px-8 focus:outline-none rounded text-lg">
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
