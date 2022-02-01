const express = require("express");
const { getConnection } = require("./dbConnection");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const connection = await getConnection();
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
