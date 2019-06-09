import { expect } from "chai";
import { hello } from "./helloworld";

describe("Hello function", () => {
  it("should return hello world", () => {
    const result = hello();
    expect(result).to.equal("Hello World!");
  });
});
