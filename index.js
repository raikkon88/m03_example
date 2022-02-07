const express = require("express");
const { getConnection } = require("./dbConnection");
const app = express();
const port = 3000;

const User = require("./model/user.model");

app.get("/", async (req, res) => {
  const connection = await getConnection();
  const dbRes = await User.find({});

  console.log(dbRes);
  return res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
