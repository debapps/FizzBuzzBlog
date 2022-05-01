import jwt from "jsonwebtoken";

// Get the secret key.
const secretKey = process.env.DEV_SECRET_KEY;

// This function get the user ID from the JWT token passed in request header.

export default function getUserByToken(req, res) {
  try {
    let authToken = req.headers["auth-token"];
    let payLoad = jwt.verify(authToken, secretKey);
    req.userID = payLoad.userID;
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
}
