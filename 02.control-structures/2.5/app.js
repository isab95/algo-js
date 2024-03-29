(() => {
    let n = prompt ("What's your favorite number?")
    while (!(n == 42))//utilise que 2 = au lieu de 3 car sinon j'ai une boucle infinie (ne sort pas de la boucle lorsque j'écris 42)
    {
        alert ("Are you sure?");
        n = prompt ("What's your favorite number?");
    }
    alert ("it's mine too");
})();