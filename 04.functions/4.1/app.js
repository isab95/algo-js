(() => {
    /**function that return the size of a rectangle surface */
    let calcSurface = (a, b) => {
        return a*b;
    }
    let lenght = prompt("Enter the lenght of your rectangle");
    let widht = prompt("Enter the widht of your rectangle");
    alert (`the surface of your rectangle is ${calcSurface(lenght,widht)}`)
})();
