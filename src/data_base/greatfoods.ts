import { MongoClient } from "mongodb";
import { configDotenv } from "dotenv";
configDotenv();
const uri = process.env.MONGO_URL || "";
console.log("URIOIII", uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

export async function Student() {
  try {
    await client.connect();

    const database = client.db("Students");

    const collection = database.collection("student");
    // const student = collection.find().toArray();
    await collection.insertOne({
      Foodname: "salad brazil",
      price: "40k",
      category: "67be94bc9bea81a31183e97c",
      image:
        "https://www.eatingwell.com/thmb/S2NGMEcgm11dtdBJ6Hwprwq-nVk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eat-the-rainbow-chopped-salad-with-basil-mozzarella-beauty-185-278133-4000x2700-56879ac756cd46ea97944768847b7ea5.jpg",
    });
    // return student;
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
