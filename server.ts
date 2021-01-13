import * as dotenv from "dotenv";
import server from "./server-config";

dotenv.config();
const port = +(process.env.PORT || 8080);
const mongo_url = process.env.MONGO_URL || "mongodb://localhost/db";

server({ mongo_url, port });
