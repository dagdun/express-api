import express from "express";
import * as bodyParser from "body-parser";
import mongoose from "mongoose";
import { responseMiddleware } from "./middlewares/response";
import route from "./routes/index";
const app = express();

const main = async ({
  mongo_url,
  port,
  middleware,
}: {
  mongo_url: string;
  port?: number;
  middleware?: (args: any) => any;
}) => {
  (async () => {
    await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  })();

  app.use(bodyParser.json());
  app.use(responseMiddleware);

  if (middleware) {
    app.use(middleware);
  }

  app.use("/v1.0", route);

  if (port) {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  }
  return app;
};
export default main;
