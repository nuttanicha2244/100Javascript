const numbers = [1, 2, 3];
const obj = { a: 1, a: 2 };

console.log(numbers instanceof Array); // bad
console.log(Array.isArray(numbers)); //good
console.log(Array.isArray(obj)); //good