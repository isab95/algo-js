(() => {
    // YOUR CODE HERE
})();
/**
 * function that return the factorial of a given number
 * @param {number of wich you want the factorial} a 
 * @returns result of the calculation
 */
function factorial (a) {
    let factor = 1;
    for (i = 2; i <= a; i++ ){
        factor *= i;
    }
    return factor;
}
/**
 * calculation of a factorial
 * @param {number of wich you want the factorial} a 
 * @param {increment} i 
 * @returns 
 */
function factorial (a, i){
    let factor = 1;
    if (i <= a){
        factor *= i;
        if (i === a){
            return factor;
        }else{
            factorial(a, (i+1));
        }
    }
}