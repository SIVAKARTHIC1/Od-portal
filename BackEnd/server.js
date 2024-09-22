const app = require("./app");
const connectDb = require("./config/dbConfig");
const uploadEvents = require("./utlis/uploadEvents");

if (process.argv[2] == "--uploadEvents") {
  uploadEvents(10)
    .then(() => console.log("Events uploaded successfully"))
    .catch((err) => console.log(err));
}

app.listen(3000, async () => {
  await connectDb();
  console.log("server listening");
});
