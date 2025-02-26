import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";
configDotenv();
const uri = process.env.MONGO_URL || "";
console.log("URIOIII", uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

export async function Delete() {
  try {
    await client.connect();

    const database = client.db("Students");

    const collection = database.collection("student");

    await collection.deleteMany({ gender: "female" });

    // const findQuery = {
    //   year: { $gt: 2015 },
    // };
    // const movies = await collection.find().limit(5).toArray();
    // return movies;
  } catch (error) {
    console.log(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
