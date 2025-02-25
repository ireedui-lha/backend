import bodyParser from "body-parser";
import express from "express";
import { run } from "./data_base/mongobd";

const app = express();

app.use(bodyParser.json());
const port = 5000;
app.post("/foods", async function (req, res) {
  try {
    const foods = await run();
    res.status(200).json({ message: "Success", data: foods });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
  // const movies = await run();
  // res.status(200).send(movies);
});
app.listen(port, () => {
  console.log(`2000 asaalaa${port}`);
});
