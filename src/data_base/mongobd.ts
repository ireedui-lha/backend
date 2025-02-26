import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";
configDotenv();
const uri = process.env.MONGO_URL || "";
console.log("URIOIII", uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

export async function run() {
  try {
    await client.connect();

    const database = client.db("Students");

    const collection = database.collection("student");
    const HAajii = collection.find().toArray();

    return HAajii;
    // const findQuery = {
    //   year: { $gt: 2015 },
    // };
    // const movies = await collection.find().limit(5).toArray();
    // return movies;
  } catch (error) {
    console.log("ALDAA GARLAAA!", error);
  }
}
