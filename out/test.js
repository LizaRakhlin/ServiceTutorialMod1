"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var helloworld_1 = require("./helloworld");
describe("Hello function", function () {
    it("should return hello world", function () {
        var result = helloworld_1.hello();
        chai_1.expect(result).to.equal("Hello World!");
    });
});
//# sourceMappingURL=test.js.map