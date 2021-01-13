import { exampleFunction } from "../../libs/example";

describe("example test function", () => {
  it("should be int", () => {
    expect(exampleFunction(4)).toEqual(40);
  });
});
