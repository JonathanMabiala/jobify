import express from "express";

const app = express();
const PORT = 5100;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("server running...");
});
