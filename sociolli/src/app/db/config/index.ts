import { MongoClient, ServerApiVersion } from 'mongodb';


// const uri = "mongodb+srv://qilaaa:RP3RDZzfzaNa6JEV@cluster0.l6rtk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const uri = process.env.MONGO_URI as string

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
    
    await client.db("instagram").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

run().catch(console.dir);


export const database = client.db("products")





