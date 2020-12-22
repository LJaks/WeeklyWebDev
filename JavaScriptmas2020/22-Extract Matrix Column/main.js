function extractMatrixColumn(matrix, column) {
  //  write code here.
  // let arr = [];
  // for (let i = 0; i < matrix.length; i++) {
  //     arr.push(matrix[i][column]);
  // }
  // return arr;

  return matrix.map((num) => num[column]);
}

/**
 * Test Suite
 */
describe("extractMatrixColumn()", () => {
  it("returns largest positive integer possible for digit count", () => {
    // arrange
    const matrix = [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6],
    ];
    const column = 2;

    // act
    const result = extractMatrixColumn(matrix, column);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual([1, 0, 3]);
  });
});
