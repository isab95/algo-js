(() => {
    let tab = [3, 5, 84, 65, 214, 75, 0, 43];
    let min = tab[0];
    let max = tab[0];
    for (let i = 1 ; i < tab.length ; i++)
    {
        if (tab[i] < min)
        {
            min = tab[i];
        }else if (tab[i] > max)
        {
            max = tab[i];
        }
    }
    console.log(`The min value of the array is ${min} and the max is ${max}`);
})();