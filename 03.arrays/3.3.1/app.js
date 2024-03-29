(() => {
    let strawHatPirate = ["Luffy", "Zoro", "Ussopp", "Nami", "Sanji", "Chopper", "Robin", "Franky"];
    let newArray = [];
    newArray = fillArray(strawHatPirate, newArray);
    console.log(newArray);
})();
function fillArray (array, copy){
    for (i = 0 ; i < array.length ; i++)
    {
        copy.push(array[i]);
    }
    return copy
}