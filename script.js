// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// // break and continue
// for (let i = 0; i < 10; i++) {
//     if(i ===5) {
//         console.log("Five");
//         break;
//     }
//     console.log(i);
// }

// function
function myself() {
    console.log("My name is John Doe");
}

myself();

// function with parameters
function myself(name) {
    console.log("My name is ", name);

}

myself("John Doe"); 
myself("Jane Doe"); 
myself("Gifty Doe"); 

function add(x, y) {
    let sum = x + y;
    console.log(sum);
}

add(5, 6);
add(6, 7);
add(7, 8);

function multiply(x, y) {
    let sum = x * y;
    console.log(sum);
}

multiply(5, 6);
multiply(6, 7);
multiply(7, 8);

// function with return value
function add(x, y) {
    let sum = x + y;
    return sum;
}
 
let result = add(10, 15);
let newResult = result * 2;
console.log(newResult);

// arrow function
let divide = (a, b) => a/b;
let multiplyy = (a, b) => {
    let sum = a * b;
    return sum;
};
console.log(divide(10, 5));
console.log(multiply(10, 5))

// Higher order Function
// Is a function that takes a function as a parameter
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map((number) => number * number);
console.log(squares);

// Higher order Function
// Is a function that takes a function as a parameter
let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let square = number.map((number) => number + number);
console.log(square);

let evens = numbers.filter((number) => number % 2 === 0);
console.log(evens);

let odds = numbers.filter((number) => number % 2 === 1);
console.log(odds);

let odds2 = numbers.filter((number) => number % 2 !== 0);
console.log(odds);

let five = numbers.find((num) => num ===5);
console.log(five);
 
// String
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.length);
console.log(sentence.charCodeAt(10));
console.log(sentence.concat(" from concatenation"));
console.log(sentence.endsWith("p"));
console.log(sentence.includes("lazy"));
console.log(sentence.indexOf("lazy"));
console.log(sentence.indexOf("o, 13"));
console.log(sentence.lastIndexOf("o"));
console.log(sentence.padStart(100));
console.log(sentence.padEnd(100));
console.log(sentence.repeat(3));
console.log(sentence.replace("lazy", "hardworking"));
console.log(sentence.slice(20, 30));
console.log(sentence.substring(20, 30));
let email = "Kofiaemail.com";
console.log(email.split("@"));
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());



