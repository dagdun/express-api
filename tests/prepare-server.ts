import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import server from "../server-config";

export const startServer = async () => {
  const mongod = new MongoMemoryServer();
  await mongod.start();
  const mongo_url = await mongod.getUri();
  return server({ mongo_url });
};

export const stopServer = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
};
