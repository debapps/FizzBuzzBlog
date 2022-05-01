import mongoose from "mongoose";

export default function mongoConnect() {
  // Get the MongoDB URL from environment variable.
  const mongoURL = process.env.DEV_MONGO_URI + process.env.DEV_DB_NAME;

  // Connect to MongoDB.
  mongoose.connect(mongoURL, (err) => {
    if (!err) {
      console.log(
        "Connected to MongoDB: DataBase -  " + process.env.DEV_DB_NAME
      );
    }
  });
}
