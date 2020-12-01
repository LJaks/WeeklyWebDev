function candies(children, candy) {
  //  write code here.
  var candyForChild = Math.floor(candy / children);
  var totalEaten = Math.floor(candyForChild * children);
  return totalEaten;
}

/**
 * Test Suite
 */
describe("candies()", () => {
  it("returns ammount of total equal candy to be eaten", () => {
    // arrange
    const children = 3;
    const candy = 10;

    // act
    const result = candies(children, candy);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(9);
  });
});
