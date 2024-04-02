(() => {
    let rand10 = () => {
        return Math.floor((Math.random() * 10) + 1);
    }
    /**function that return a array of random number of a given lenght */
    let multiRand = (n) => {
        let tab = [];
        for (let i = 0 ; i < n; i++)
        {
            tab.push(rand10());
        }
        return tab;
    }
    let n = prompt("Enter a value");
    console.log(multiRand(n));
})();