import request from "supertest";
import { startServer, stopServer } from "../../prepare-server";
import exampleModel from "../../../models/example";

describe("example unittest", () => {
  it("call get, should return json", async () => {
    const server = await startServer();
    await new exampleModel({
      name: "123",
    }).save();

    await new exampleModel({
      name: "456",
    }).save();

    const { status, body } = await request(server).get("/v1.0/example");
    expect(status).toEqual(200);
    expect(body.data.length).toEqual(2);
    expect(body.data[0].name).toEqual("123");
    expect(body.data[1].name).toEqual("456");
    expect(body.message).toEqual("success");
    expect(body.status).toEqual(200);
    await stopServer();
  });

  it("call post, should return json", async () => {
    const server = await startServer();
    const saveData = {
      name: "abc",
    };
    const { status, body } = await request(server).post("/v1.0/example").send(saveData);
    expect(status).toEqual(200);

    expect(body.data).toEqual(saveData);
    expect(body.message).toEqual("success");
    expect(body.status).toEqual(200);
    await stopServer();
  });

  it("call getId, should return json", async () => {
    const server = await startServer();
    const newDoc = await new exampleModel({
      name: "bbb",
    }).save();

    const { status, body } = await request(server).get("/v1.0/example/" + newDoc._id);
    expect(status).toEqual(200);
    expect(body.data).toEqual({ name: "bbb" });
    expect(body.message).toEqual("success");
    expect(body.status).toEqual(200);
    await stopServer();
  });

  it("call getId, should return false", async () => {
    const server = await startServer();
    const newDoc = await new exampleModel({
      name: "bbb",
    }).save();

    const { status, body } = await request(server).get(
      "/v1.0/example/5eb812562069922cb26624b0",
    );
    expect(status).toEqual(200);
    expect(body.message).toEqual("doc not found");
    expect(body.status).toEqual(404);
    await stopServer();
  });

  it("call postId, should return json", async () => {
    const server = await startServer();
    const newDoc = await new exampleModel({
      name: "bbb",
    }).save();

    const { status, body } = await request(server)
      .post("/v1.0/example/" + newDoc._id)
      .send({ name: "ccc" });
    expect(status).toEqual(200);
    expect(body.data.name).toEqual("ccc");
    expect(body.data.updateTime).not.toBe(null);
    expect(body.message).toEqual("success");
    expect(body.status).toEqual(200);
    await stopServer();
  });

  it("call postId, should return false", async () => {
    const server = await startServer();
    const newDoc = await new exampleModel({
      name: "bbb",
    }).save();

    const { status, body } = await request(server)
      .post("/v1.0/example/5eb812562069922cb26624b0")
      .send({ name: "ccc" });
    expect(status).toEqual(200);
    expect(body.message).toEqual("doc not found");
    expect(body.status).toEqual(404);
    await stopServer();
  });

  it("call deleteId, should return json", async () => {
    const server = await startServer();
    const newDoc = await new exampleModel({
      name: "ddd",
    }).save();

    await new exampleModel({
      name: "eee",
    }).save();
    const { status, body } = await request(server).delete("/v1.0/example/" + newDoc._id);
    expect(status).toEqual(200);
    expect(body.message).toEqual("success");
    expect(body.status).toEqual(200);

    const { body: body1 } = await request(server).get("/v1.0/example");
    expect(body1.data.length).toEqual(1);
    expect(body1.data[0].name).toEqual("eee");
    await stopServer();
  });
});
