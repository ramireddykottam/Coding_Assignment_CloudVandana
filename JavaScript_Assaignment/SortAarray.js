let input = prompt("Enter Array of numbers space seperated");
let inputArray = input.split(',').map(item => parseFloat(item.trim()));
inputArray.sort(function(a, b) {
    return b - a; // Compare in descending order
});

console.log(inputArray);
