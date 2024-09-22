const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Od-Portal");
    console.log("db connected successfully");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDb;
