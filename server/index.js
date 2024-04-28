const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Yay it works");
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
