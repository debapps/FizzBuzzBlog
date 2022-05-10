// API EndPoint: /api/login
// Method: POST
// login as a Admin user.

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/users";
import mongoConnect from "../../utilities/dbConnect";

// Secret Key for password hashing.
const secretKey = process.env.SECRET_KEY;

// Connect to MongoDB Server.
mongoConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Get the email and password from request body.
    const { email, password } = req.body;

    try {
      // Check if the email exists in the database.
      let emailUser = await User.findOne({ email });
      if (!emailUser) {
        return res.status(401).json({
          success: false,
          message: "Please enter the correct credentials to login",
        });
      }

      // Match the user password with the database hash.
      let matchPasswd = await bcrypt.compare(password, emailUser.password);

      // If the password mis-match.
      if (!matchPasswd) {
        return res.status(401).json({
          success: false,
          message: "Please enter the correct credentials to login",
        });
      }

      // Sign the JWT web token taking the user id.
      let authData = {
        userID: emailUser.id,
      };
      let authToken = jwt.sign(authData, secretKey);

      // Send the JWT token with success.
      return res.status(200).json({ success: true, authToken: authToken });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
