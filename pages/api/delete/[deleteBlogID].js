// API EndPoint: /api/delete/:[deleteBlogID]
// Method: POST
// This will delete a blogpost.

import mongoConnect from "../../../utilities/dbConnect";
import Blog from "../../../models/blogs";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.COULD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Connect to MongoDB Server.
mongoConnect();

export default async function handler(req, res) {
  // Get the blog ID to be deleted.
  const { deleteBlogID } = req.query;

  if (req.method === "POST") {
    try {
      // Check if the blog exists in the database.
      let currBlog = await Blog.findById(deleteBlogID);

      if (!currBlog) {
        return res.status(404).json({ message: "Blog not found!" });
      }

      // Delete the image from the cloudinary.
      let imageID = currBlog.blogImageID;
      let { result } = await cloudinary.uploader.destroy(imageID);

      if (result === "ok") {
        // Delete the BlogPost with given blog id.
        let deletedBlog = await Blog.findByIdAndDelete(deleteBlogID);

        // Sent the success message as a response.
        if (deletedBlog) {
          return res
            .status(200)
            .json({ success: true, message: "Blog deleted successfully." });
        }
      } else {
        return res.status(500).json({ message: "Image deletion Error!" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
