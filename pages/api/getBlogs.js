// API EndPoint: /api/getBlogs
// Method: GET
// Fetches all the available blogs.

import mongoConnect from "../../utilities/dbConnect";
import Blog from "../../models/blogs";

// Connect to MongoDB Database Server.
mongoConnect();

export default async function handler(req, res) {
  try {
    // Fetches all the blogs from the database.
    let blogList = await Blog.find({});

    // Send all the blogs as response with success.
    return res.status(200).json(blogList);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
