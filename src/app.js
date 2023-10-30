import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

const mongoClient = new MongoClient(process.env.DATABASE_URL);
try{
    await mongoClient.connect();
    console.log("MongoDB conectado");
}catch (err){
    console.log(err.message);
}

const db = mongoClient.db();

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

