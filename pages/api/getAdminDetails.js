// API EndPoint: /api/getAdminDetails
// Method: GET
// Get the details of currently logged in Admin user.

import User from "../../models/users";
import mongoConnect from "../../utilities/dbConnect";
import getUserByToken from "../../utilities/getUserToken";

// Connect to MongoDB Server.
mongoConnect();

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Get the user ID from the auth-token.
    getUserByToken(req, res);

    try {
      // Get user details excluding password.
      let userDetails = await User.findById(req.userID).select("-password");

      // Send the user details as response with success.
      return res.status(200).json({ success: true, userDetails: userDetails });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
