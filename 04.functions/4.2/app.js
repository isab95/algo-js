(() => {
    /**function that r'eturn a random number between 1 anf 10 (both include) */
    let rand10 = () => {
        return Math.floor((Math.random() * 10) + 1);
    }
    alert (rand10())
})();