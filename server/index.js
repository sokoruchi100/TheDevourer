const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

// Serve Angular app
app.use(express.static(path.join(__dirname, "../client/build")));

// Handle all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
