const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(
      `${process.env.MONGO_CONNECTION_STRING}/${process.env.MONGO_DB_NAME}`
    );
    console.log("db connected successfully");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDb;
