import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "Miscellaneous",
  },
  author: {
    type: String,
    default: "Blog Admin",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  introduction: {
    type: String,
    required: true,
  },
  blogImageURL: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

let Blog = null;

try {
  Blog = mongoose.model("blogs", blogSchema);
} catch (error) {
  Blog = mongoose.model("blogs");
}

export default Blog;
