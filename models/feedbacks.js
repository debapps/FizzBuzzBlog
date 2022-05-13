import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

let Feedback = null;

try {
  Feedback = mongoose.model("feedbacks", feedbackSchema);
} catch (error) {
  Feedback = mongoose.model("feedbacks");
}

export default Feedback;
