import express from "express";
import exampleRouter from "./example.route";

const app = express();

app.use("/example", exampleRouter);

export default app;
