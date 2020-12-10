function adjacentElementsProduct(nums) {
  //  write code here.
  let num = 0;
  let arr = [];
  for (let i = 1; i < nums.length; i++) {
    num = nums[i - 1] * nums[i];
    if (num >= 0) {
      arr.push(num);
    }
  }
  return Math.max(...arr);
}

/**
 * Test Suite
 */
describe("adjacentElementsProduct()", () => {
  it("returns largest product of adjacent values", () => {
    // arrange
    const nums = [3, 6, -2, -5, 7, 3];

    // act
    const result = adjacentElementsProduct(nums);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(21);
  });
});
