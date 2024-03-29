(() => {
    let weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saterday", "Sunday"];
    let num = prompt("Type a number between 1 and 7");
    if (num < 8 && num > 0)
    {
        console.log(weekDay[num-1]);
    }
})();