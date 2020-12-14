function validTime(str) {
  //  write code here.
  let num = str.split(":");
  if (parseInt(num[0]) < 0 || parseInt(num[0]) > 23) {
    console.log(`wrong hours ${parseInt(num[0])}`);
    return false;
  }
  if (parseInt(num[1]) < 0 || parseInt(num[1]) > 59) {
    console.log(`wrong minutes ${parseInt(num[1])}`);
    return false;
  }
  return true;
}

/**
 * Test Suite
 */
describe("validTime()", () => {
  it("returns true for valid time", () => {
    // arrange
    const str = "13:58";

    // act
    const result = validTime(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(true);
  });

  it("returns false when invalid hours", () => {
    // arrange
    const str = "25:51";

    // act
    const result = validTime(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(false);
  });

  it("returns false when invalid minutes", () => {
    // arrange
    const str = "02:76";

    // act
    const result = validTime(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(false);
  });
});
