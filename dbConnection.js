const mongoose = require("mongoose");

require("dotenv").config();

let mongoConnection = null;

const connectDB = async () => {
  console.log(process.env.NODE_ENV);

  const mongodbProtocol = process.env.MONGODB_PROTOCOL;
  const username = process.env.MONGODB_USER;
  const password = process.env.MONGODB_PASSWORD;
  const host = process.env.MONGODB_HOST;
  const database = process.env.MONGODB_DATABASE;

  const connectionString = `${mongodbProtocol}://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`;
  return await mongoose.connect(connectionString);
};

const getConnection = async () => {
  if (!mongoConnection) {
    mongoConnection = await connectDB();
  }
  return mongoConnection;
};

const disconnectDB = async () => {
  if (mongoConnection) {
    await mongoose.connection.close();
  }
};

module.exports = { getConnection, disconnectDB };
