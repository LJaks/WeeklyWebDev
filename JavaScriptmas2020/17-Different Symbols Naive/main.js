function differentSymbolsNaive(str) {
//     let newArr = [];
//     let symbols = str.split("");
//   for(let i = 0; i < symbols.length; i++){
//     if(!newArr.includes(symbols[i])){
//         newArr.push(symbols[i]);
//     }
//   }
//    console.log(newArr.length);
//    return newArr.length;

   return [... new Set(str.split(''))].length;
}



/**
* Test Suite 
*/
describe('differentSymbolsNaive()', () => {
    it('returns count of unique characters', () => {
        // arrange
        const str = 'cabca';
        
        // act
        const result = differentSymbolsNaive(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });
});