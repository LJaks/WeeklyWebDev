function extractEachKth(nums, kth) {
    //  write code here.
    let arr = nums.filter((num, index) => {
            return ((index + 1) % kth !== 0)  ;
        })
    
    console.log(arr);
    return arr;
}

/**
* Test Suite 
*/
describe('extractEachKth()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const index = 3;
        
        // act
        const result = extractEachKth(nums, index);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([1, 2, 4, 5, 7, 8, 10]);
    });
});