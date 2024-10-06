const app = require("./src/app");
const connectDb = require("./config/dbConfig");
const uploadEvents = require("./src/utlis/uploadEvents");
const createUsers = require("./src/utlis/uploadUser");
const dotenv = require("dotenv");

dotenv.config({ path: "./Config.env" });

if (process.argv[2] == "--uploadEvents") {
  uploadEvents(10)
    .then(() => console.log("Events uploaded successfully"))
    .catch((err) => console.log(err));
} else if (process.argv[2] == "--uploadusers") {
  createUsers(process.argv[3], 10)
    .then(() => console.log("created users successfully"))
    .catch((err) => console.log(err));
}

app.listen(3000, async () => {
  await connectDb();
  console.log("server listening");
});
