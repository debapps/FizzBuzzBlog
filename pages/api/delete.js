// API EndPoint: /api/delete
// Method: POST
// This will delete a blogpost.

import mongoConnect from "../../utilities/dbConnect";
import Blog from "../../models/blogs";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.COULD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Connect to MongoDB Server.
mongoConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Get the blogpost ID and Cloud Image Id from the request body
    let { blogID, imageID } = req.body;

    try {
      // Check if the blog exists in the database.
      let currBlog = await Blog.findById(blogID);

      if (!currBlog) {
        return res.status(404).json({ message: "Blog not Found!" });
      }

      // Delete the image from the cloudinary.
      let imgRes = await cloudinary.uploader.destroy(imageID);

      // Delete the BlogPost with given blog id.
      let deletedBlog = await Blog.findByIdAndDelete(blogID);

      // Sent the success message as a response.
      if (deletedBlog) {
        return res
          .status(200)
          .json({ success: true, message: "Blog deleted successfully." });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
