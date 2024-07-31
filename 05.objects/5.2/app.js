(() => {
    JSON.stringify(askTvSerie)
    console.log(shuffleArray())
})();
function askTvSerie(){
    let favSerie = {
        Name: prompt("What is the name of your favorite tv series?") ,
        ProdYear: prompt("When was it produce(year)?"),
        CastMember: []
    }
    do {
        favSerie.CastMember.push(prompt("Add a cast member"))
    }while (prompt("Would you like to add another cast member (Y/N)?").toUpperCase() === "Y")
    return favSerie;
}
function shuffleArray (inputAr){
    let oldArray = inputArray;
    let newArray = [];
    let index;
    for (let i = 1 ; i <= inputAr.lenght; i++)
    {
        index = math.floor(math.random() * oldArray.lenght);
        newArray.push(index);
        oldArray.splice(index,1);
    }
    return newArray;
}
