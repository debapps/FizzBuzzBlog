// API EndPoint: /api/compose

import mongoConnect from "../../utilities/dbConnect";
import Blog from "../../models/blogs";

// Connect to MongoDB Server.
mongoConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Create the blogpost from the request body.
      let blogPost = new Blog({
        ...req.body,
      });

      // Save the blogpost into mongoDB.
      let saveBlog = await blogPost.save();

      // Sent the success message as a response.
      if (saveBlog) {
        res
          .status(200)
          .json({ success: true, message: "Blog saved successfully." });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
