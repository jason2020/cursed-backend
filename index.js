const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;

// Fix CORS missing
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(morgan("dev"));

app.get("/bruh", (req, res) => {
  console.log("No way this works");
  res.sendFile("background.png", { root: __dirname });
});

app.get("/bruh2", (req, res) => {
  res.sendFile("aiya.js", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
