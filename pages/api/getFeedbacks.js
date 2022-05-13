// API EndPoint: /api/getFeedbacks
// Method: GET
// Fetches all the available feedbacks.

import mongoConnect from "../../utilities/dbConnect";
import Feedback from "../../models/feedbacks";

// Connect to MongoDB Database Server.
mongoConnect();

export default async function handler(req, res) {
  try {
    // Fetches all the feedbacks from the database.
    let feedbacks = await Feedback.find({});

    // Send all the feedbacks as response with success.
    return res.status(200).json(feedbacks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
