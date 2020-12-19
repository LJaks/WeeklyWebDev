function arrayPreviousLess(nums) {
    //  write code here.
    let array =[];
    for (let i = nums.length - 1; i > -1; i--) {
        let pushValue = -1;
        for(let j = i - 1; j > -1; j--) {
            if (nums[j] < nums[i]) {
                pushValue = nums[j]
                break;
            }
        }
        array.unshift(pushValue);
    }
    return array;
}

/**
* Test Suite 
*/
describe('arrayPreviousLess()', () => {
    it('shift previous postions from the left to a smaller value or store -1', () => {
        // arrange
        const nums = [3, 5, 2, 4, 5];
        
        // act
        const result = arrayPreviousLess(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([-1, 3, -1, 2, 4]);
    });
});