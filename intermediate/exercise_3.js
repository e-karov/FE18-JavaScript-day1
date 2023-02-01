const myString = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

function splitAndPrint(str) {
    let fruits = str.split("/");
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}

splitAndPrint(myString);