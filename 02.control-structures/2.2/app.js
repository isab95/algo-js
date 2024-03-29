(() => {
    let min = prompt ("Please enter a number");
    let max = prompt ("please enter a second number higher than the first one");
    if (min > max)
    {
        let current = prompt ("please enter yet another number");
        if (current > min && current < max)
        {
            console.log (`${current}`);
        }
    }
    else
    {
        console.log("please check the message when you enter your second number");
    }
})();