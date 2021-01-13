import express from "express";
const app = express();

import { get, post, getId, postId, deleteId } from "../controllers/v1.0/example.controller";

app

  // get
  .get("/", get)

  // post
  .post("/", post);

app
  // get
  .get("/:id", getId)

  // post
  .post("/:id", postId)

  // get
  .delete("/:id", deleteId);

export default app;
