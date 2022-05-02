import React from "react";
import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  const { blog } = router.query;
  return <div>BlogName - {blog}</div>;
};

export default Blog;
