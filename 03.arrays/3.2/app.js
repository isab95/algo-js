(() => {
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [100, 101, 102];
    console.log(addArray(arr1));
    console.log(addArray(arr2));
})();
function addArray (arr)
{
    let sum = 0;
    for (i = 0 ; i < arr.length ; i++)
    {
        sum = sum + arr[i];
    }
    return "la somme du tableau est " + (sum/arr.length);
}