function countVowelConsonant(str) {
  // write code here
  let vowArr = ["a", "e", "i", "o", "u"];
  let lettArr = str.split("");
  let sum = lettArr.reduce((count, letter) => {
    count = vowArr.filter((vowels) => lettArr.includes(vowels)).length * 1;
    count += vowArr.filter((vowels) => !lettArr.includes(vowels)).length * 2;
    console.log(letter);
    return count;
  });
  return sum;
}

/**
 * Test Suite
 */
describe("countVowelConsonant()", () => {
  it("returns total of vowels(1) and consonants(2) to be added", () => {
    // arrange
    const value = "abcde";

    // act
    const result = countVowelConsonant(value);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(8);
  });
});
