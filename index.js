require("dotenv").config();
const express = require("express");
const PORT = 4000;

const app = express();

app.get("/twitter", (req, res) => {
  res.send("Twitter Hello World");
});

// app.listen(process.env.PORT, () => {
//   console.log(`Example app Listening on Port ${process.env.PORT}`);
// });
app.listen(PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
