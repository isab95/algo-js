(() => {
    let min = prompt ("Please enter a number");
    let max = prompt ("please enter a second number higher than the first one");
    let current = prompt ("please enter yet another number");
    if (min > max)
    {
        if (current > min && current < max)
        {
            alert (current);
        }
    }
    else
    {
        alert ("please check the message when you enter your second number");
    }
})();