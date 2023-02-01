
function rearangeStrings() {
    let people = ["Greg", "Mary", "Devon", "James"];

    people.shift(); // Removing the first element of the array;
    people.unshift("Matt"); // Adding an element on the first position (index 0);
    people.pop();           // Removing the last element from the array;
    people.push("Emanoil");  // Adding an element at the end of the array;
    let arrCopy = people.slice(2);  // Making a copy of the array. First argument gives the start index to copy from, second argument - end index (not included);
    const indexOfMary = people.indexOf("Mary"); // Finding the index of an element, if not found returns -1:
    const indexOfFoo = people.indexOf("Foo");
    

    people = ["Greg", "Mary", "Devon", "James"];

    people.splice(2,1, "Elizabeth", "Anna");    

    console.log(people);
}

rearangeStrings();