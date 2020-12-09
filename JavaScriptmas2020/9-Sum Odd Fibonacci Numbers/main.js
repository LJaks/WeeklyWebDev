function sumOddFibonacciNumbers(num) {
  //  write code here.
  let sum = 2;
  let fibArr = [1, 1];
  let fibNum = 0;
  //Fibonacci array
  for (let i = 2; fibNum <= num; i++) {
    fibNum = fibArr[i - 2] + fibArr[i - 1];
    if (fibNum <= num) {
      fibArr.push(fibNum);
      //Odd Fibonacci numbers
      if (fibNum % 2 !== 0) {
        sum += fibNum;
      }
    }
  }
  console.log(fibArr, sum);
  return sum;
}

/**
 * Test Suite
 */
describe("sumOddFibonacciNumbers()", () => {
  it("returns sum of all odd Fibonnci numbers", () => {
    // arrange
    const num = 10;

    // act
    const result = sumOddFibonacciNumbers(num);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(10);
  });

  it("returns sum of all odd Fibonnci numbers 2nd example", () => {
    // arrange
    const num = 1000;

    // act
    const result = sumOddFibonacciNumbers(num);

    // log
    console.log("result 2: ", result);

    // assert
    expect(result).toBe(1785);
  });
});
