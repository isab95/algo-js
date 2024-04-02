(() => {
    let A = [1, 5];
    let B = [3, 2];
    console.log(calcDistance(A, B));
})();
/**function that generate the distance between two point by their coordinate in 2D */
function calcDistance (A, B){
    let distance = (A[0]-B[0])*(A[1]-B[1])

    return distance >= 0 ? distance : distance * (-1)
}