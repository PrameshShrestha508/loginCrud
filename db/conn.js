import mongoose from "mongoose";
import "dotenv/config";
// Database connect
// const conn_uri = process.env.MONGO_URL;
const db = mongoose.connect(
  process.env.MONGO_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("connected to db")
);

export default db;
