import mongoose from "mongoose";

// Connection object initialize.
let connection = {};

export default async function mongoConnect() {
  if (connection.isConnected) {
    return true;
  } else {
    try {
      // Get the MongoDB URL from environment variable.
      const mongoURL = process.env.MONGO_URI + process.env.DB_NAME;

      // Connect to MongoDB.
      let con = await mongoose.connect(mongoURL);
      connection.isConnected = con.connections[0].readyState;
      console.log(
        "Connected to MongoDB: DataBase -  " + process.env.DB_NAME
      );
    } catch (error) {
      console.log("Error in connecting MongoDB." + error);
    }
  }
}
