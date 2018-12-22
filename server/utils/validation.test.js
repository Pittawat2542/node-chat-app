const expect = require("expect");

const { isRealString } = require("./validation");

describe("isRealString", () => {
  it("should reject non-string values", () => {
    let str = 123;
    let result = isRealString(str);

    expect(result).toBe(false);
  });

  it("should reject string with only spaces", () => {
    let str = "                                ";
    let result = isRealString(str);

    expect(result).toBe(false);
  });

  it("should allow string with non-space characters", () => {
    let str = " Hello            ";
    let result = isRealString(str);

    expect(result).toBe(true);
  });
});
