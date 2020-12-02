function depositProfit(deposit, rate, threshold) {
  //  write code here.
  let count = 0;
  for (let i = 1; i < 10; i++) {
    if (deposit >= threshold) {
      break;
    } else {
      deposit *= rate / 100 + 1;
      count = count + 1;
    }
  }
  return count;
}
depositProfit(100, 20, 170);

/**
 * Test Suite
 */
describe("depositProfit()", () => {
  it("returns number of years it will take to hit threshold based off of deposit & rate", () => {
    // arrange
    const deposit = 100;
    const rate = 20;
    const threshold = 170;

    // act
    const result = depositProfit(deposit, rate, threshold);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(3);
  });
});
