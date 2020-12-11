function avoidObstacles(nums) {
  //  write code here.
  let result = 0;
  for (let i = 1; i <= Math.max(...nums); i++) {
    if (nums.sort().every((num) => num % i !== 0)) {
      console.log(`min length ${i} of the successful jump`);
      return (result = i);
    } else {
      console.log(`${i} length of the jump is not enough`);
    }
  }
}

/**
 * Test Suite
 */
describe("avoidObstacles()", () => {
  it("returns minimal number of jumps in between numbers", () => {
    // arrange
    const nums = [5, 3, 6, 7, 9];

    // act
    const result = avoidObstacles(nums);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(4);
  });
});
