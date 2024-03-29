(() => {
    let n = parseInt(prompt("Enter a value for n"));
    let addition = 0;
    for (i = 0; i < n; i++)
    {
        addition = addition + parseInt(prompt("Enter a value to add"));
    }
    alert(`your addition result is ${addition}`);
})();