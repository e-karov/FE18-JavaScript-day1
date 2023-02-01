const fruits = ["apple", "banana", "kiwi"];
const animals = ["monkey", "horse", "dog"];
let output;

function transformFruits(arr) {
    arr.push("orange");
    output = arr.join(", ")
    console.log(output);

    arr.pop();
    output = arr.join(", ")
    console.log(output);
}

function transformAnimals(arr) {
    output = arr.reverse();
    console.log(output.join(", "));

    arr.unshift("cat");
    console.log(arr.join(", "));
}

transformFruits(fruits);
transformAnimals(animals);