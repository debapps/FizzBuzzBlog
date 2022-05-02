import { useState } from "react";
import BlogContext from "./blogContext";
import { callBlogAPI, getJSONHeader } from "../../../utilities/callAPI";

const host = process.env.NEXT_PUBLIC_APP_HOST;

export default function BlogState(props) {
  // Blog hook.
  const [blogs, setBlogs] = useState([]);

  // This function fetches all blogs.
  const fetchAllBlogs = async () => {
    console.log("fetchallblogs");
    // Get the Request header.
    const myHeader = getJSONHeader();

    // Get the host address and create the URL.
    let apiEndPoint = "/api/getBlogs";
    const url = host + apiEndPoint;

    // Call the API and set the result into blogs hook.
    let blogList = await callBlogAPI(url, myHeader);
    setBlogs(blogList);
  };
  return (
    <BlogContext.Provider value={{ blogs, fetchAllBlogs }}>
      {props.children}
    </BlogContext.Provider>
  );
}
