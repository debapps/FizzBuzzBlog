import { useState } from "react";
import BlogContext from "./blogContext";
import { callBlogAPI, getJSONHeader } from "../../../utilities/callAPI";

const host = process.env.NEXT_PUBLIC_APP_HOST;

export default function BlogState(props) {
  // Blog hook.
  const [blogs, setBlogs] = useState([]);

  // This function compares the blog creation date for sorting blogs.
  function compareDate(blog1, blog2) {
    if (Date(blog1.dateCreated) > Date(blog2.dateCreated)) {
      return 1;
    } else {
      return -1;
    }
  }

  // This function fetches all blogs.
  const fetchAllBlogs = async () => {
    // Get the Request header.
    const myHeader = getJSONHeader();

    // Get the host address and create the URL.
    let apiEndPoint = "/api/getBlogs";
    const url = host + apiEndPoint;

    // Call the blog API.
    let blogList = await callBlogAPI(url, myHeader);

    // Sort the list of blogs based on date of creation.
    blogList.sort(compareDate);

    // Set the blog list.
    setBlogs(blogList);
  };
  return (
    <BlogContext.Provider value={{ blogs, fetchAllBlogs }}>
      {props.children}
    </BlogContext.Provider>
  );
}
