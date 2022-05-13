// API EndPoint: /api/addFeedback
// Method: POST

import mongoConnect from "../../utilities/dbConnect";
import Feedback from "../../models/feedbacks";

// Connect to MongoDB Server.
mongoConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Get the feedback data from request body.
      let newFeedback = new Feedback({
        ...req.body,
      });

      // Save the feedback into mongoDB.
      let savedFeedback = newFeedback.save();

      // Sent the success message as a response.
      if (savedFeedback) {
        return res.status(200).json({
          success: true,
          message: "Your comments saved successfully.",
        });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
