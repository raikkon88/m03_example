const express = require("express");
const logger = require("./log/logger.log");
const { getConnection, disconnectDB } = require("./dbConnection");
const app = express();
const port = 3000;

app.use(express.json());

const User = require("./model/user.model");

app.get("/", async (req, res) => {
  const dbRes = await User.find({});

  return res.send("Hello World!");
});

app.post("/user", async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    return res.send(user);
  } catch (err) {
    logger.error("Ei que craixejo, " + JSON.stringify(err.message));
    return res.status(500).send("unable to create user");
  }
});

const server = app.listen(port, async () => {
  await getConnection();
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
