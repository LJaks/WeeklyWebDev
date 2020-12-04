function centuryFromYear(num) {
  //  write code here.
  num = num.toString().split("");
  let last2Num = parseInt(num[num.length - 2] + num[num.length - 1]);
  let num1 = parseInt(num[0] + num[1]);

  if (last2Num > 0) {
    return (num1 = num1 + 1);
  }
  return num1;
}

/**
 * Test Suite
 */
describe("centuryFromYear()", () => {
  it("returns current century", () => {
    // arrange
    const year = 1905;

    // act
    const result = centuryFromYear(year);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(20);
  });

  it("returns current century for edge case of start of century", () => {
    // arrange
    const year = 1700;

    // act
    const result = centuryFromYear(year);

    // log
    console.log("result 2: ", result);

    // assert
    expect(result).toBe(17);
  });
});
