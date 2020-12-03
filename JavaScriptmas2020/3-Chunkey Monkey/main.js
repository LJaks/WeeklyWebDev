function chunkyMonkey(values, size) {
  //  write code here.
  let arrayLen = values.length;
  let array = [];
  for (let i = 0; i < arrayLen / size; i++) {
    array.push(values.slice(0, size));
    values.splice(0, size);
  }
  console.log(array);
  return array;
}
chunkyMonkey(["a", "b", "c", "d"], 2);

/**
 * Test Suite
 */
describe("chunkyMonkey()", () => {
  it("returns largest positive integer possible for digit count", () => {
    // arrange
    const values = ["a", "b", "c", "d"];
    const size = 2;

    // act
    const result = chunkyMonkey(values, size);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
});
