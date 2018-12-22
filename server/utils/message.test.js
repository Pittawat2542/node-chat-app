const expect = require("expect");

const { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    let from = "test";
    let text = "test text";
    let result = generateMessage(from, text);

    expect(result.from).toBe(from);
    expect(result.text).toBe(text);
    expect(typeof result.createdAt).toBe("number");
  });
});

describe("generateLocationMessage", () => {
  it("should generate correct location object", () => {
    let from = "test";
    let latitude = "1";
    let longitude = "1";
    let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    let result = generateLocationMessage(from, latitude, longitude);

    expect(result.from).toBe(from);
    expect(result.url).toBe(url);
    expect(typeof result.createdAt).toBe("number");
  });
});
