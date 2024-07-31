(() => {
    console.log(JSON.stringify(askTvSerie()));
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
