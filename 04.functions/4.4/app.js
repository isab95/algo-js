(() => {
})();
/**function that return a certain number of element from an array chosen randomly */
function pickLearner (inputAr, n){
    let chosen = [];
    let index;
    for (let i = 1 ; i <= n; i++)
    {
        index = math.floor(math.random() * inputAr.lenght);
        chosen.push(index);
        inputAr.splice(index,1);
    }
    return chosen;
}