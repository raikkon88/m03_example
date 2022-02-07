const express = require("express");
const { getConnection, disconnectDB } = require("./dbConnection");
const app = express();
const port = 3000;

const User = require("./model/user.model");

app.get("/", async (req, res) => {
  const dbRes = await User.find({});

  console.log(dbRes);
  return res.send("Hello World!");
});

const server = app.listen(port, async () => {
  const db = await getConnection();
  console.log(db);
  console.log(`Example app listening on port ${port}`);
});

process.on("SIGINT", function () {
  disconnectDB().then(() => {
    server.close(function () {
      console.log("closed connection");
      process.exit(0);
    });
  });
});
