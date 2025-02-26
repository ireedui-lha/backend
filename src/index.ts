import bodyParser from "body-parser";
import express from "express";
import { run } from "./data_base/mongobd";
import { Student } from "./data_base/greatfoods";
import { configDotenv } from "dotenv";
import { Update } from "./data_base/update";
import { Delete } from "./data_base/delete";
import { Category } from "./category/category";
const app = express();

app.use(bodyParser.json());
const port = 5000;
configDotenv();
app.get("/category", async function (req, res) {
  try {
    const foods = await Category();

    res.status(200).json({ data: foods });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});
app.post("/category", async function (req, res) {
  try {
    await Student();
    res.status(200).json({ message: "goy shaala" });
  } catch (error) {
    res.status(500).json({ message: "bolsngue hha", error });
  }
});
app.put("/category", async function (req, res) {
  try {
    const student = await Update();
    res.status(200).json({ message: "goy shaala", student });
  } catch (error) {
    res.status(500).json({ message: "bolsngue hha", error });
  }
});
app.delete("/category", async function (req, res) {
  try {
    const student = await Delete();
    res.status(200).json({ message: "goy shaala", student });
  } catch (error) {
    res.status(500).json({ message: "bolsngue hha", error });
  }
});
app.listen(port, () => {
  console.log(`2000 asaalaa${port}`);
});
