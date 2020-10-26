// Given two integers a and b, which can be positive or negative,
//find the sum of all the numbers between including them too
//and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getSum( a,b ) {
    let min = Math.min(a,b);
    let max = Math.max(a,b);
    let sum = 0;
    if (min >= 0) {
        while (max-min >= 1) {
            sum = sum + max;
            max--;
        }
    } else if (min < 0) {
        while (-min-max >= 1) {
            sum += max;
            max--;
        }
    }

    
    
 console.log(min, max, sum)
  
 return;
}
getSum(-2, 0)