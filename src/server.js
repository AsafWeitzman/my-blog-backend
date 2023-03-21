import express from "express";

const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello!");
});

app.listen(8006, () => {
  console.log("Server is listening on port 8006");
});
