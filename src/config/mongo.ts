import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  const DB_URI = <any>process.env.DB_URI;
  await connect(DB_URI);
}

export default dbConnect;
