import { MongoClient, ServerApiVersion } from 'mongodb';


const uri = "mongodb+srv://qilaaa:RP3RDZzfzaNa6JEV@cluster0.l6rtk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    console.log(uri)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("instagram").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

run().catch(console.dir);


export const database = client.db("products")





