// API EndPoint: /api/createAdmin
// Method: POST
// Create new admin user.

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../../models/users";
import mongoConnect from "../../utilities/dbConnect";

// Salt Rounds.
const saltRounds = parseInt(process.env.SALT_ROUNDS);

// Secret Key for password hashing.
const secretKey = process.env.SECRET_KEY;

// Connect to MongoDB Server.
mongoConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Check if there is any user with same email id in the database.
      let emailUser = await User.findOne({ email: req.body.email });
      if (emailUser) {
        return res
          .status(400)
          .json({ success: false, message: "E-mail already in use" });
      }

      // Hash the password with salt rounds.
      let hashPass = await bcrypt.hash(req.body.password, saltRounds);

      // Create the Admin User from the request body.
      let newAdmin = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: hashPass,
        gender: req.body.gender,
      });

      // Save the Admin User into mongoDB.
      let saveUser = await newAdmin.save();

      // Sign the JWT web token taking the user id.
      let authData = {
        userID: saveUser.id,
      };
      let authToken = jwt.sign(authData, secretKey);

      // Send the JWT token with success.
      return res.status(200).json({ success: true, authToken: authToken });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
