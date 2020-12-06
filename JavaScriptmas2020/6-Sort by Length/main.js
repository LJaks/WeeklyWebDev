function sortByLength(strs) {
  //  write code here.
  let mapped = strs.map((str, i) => {
      return {index: i, value: str.length}
  })
  mapped.sort((a,b) => {
      if(a.value > b.value){
          return 1;
      }
      if(a.value < b.value){
          return -1;
      }
      return 0;
  })
  let result = mapped.map((element) => {
      return strs[element.index]
  }) 
  return result;
}

/**
* Test Suite 
*/
describe('sortByLength()', () => {
  it('sorts the strings from shortest to longest', () => {
      // arrange
      const strs = ["abc", "", "aaa", "a", "zz"];
      
      // act
      const result = sortByLength(strs);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
  });
});