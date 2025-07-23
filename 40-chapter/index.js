// old way
const fruits = ["apple", "banana"];

// console.log(fruits.indexOf('apple')); // ถ้าเจอจะเป็นเลข 0 ถ้าไม่เจอจะเป็็น -1

if (fruits.indexOf("banana") !== -1) {
  console.log("helllo banana");
} else {
  console.log("banana is not found");
}

// new good
console.log("------ includes-------");
console.log(fruits.includes("apple")); // true or false
if (fruits.includes("apple ") !== -1) {
  console.log("helllo apple");
} else {
  console.log("apple is not found");
}

//ร่วมกับ filter()
const fruitsToCheck = ["apple", "banana", "cherry", "mango"];
let filterFruits = fruitsToCheck.filter(f => fruits.includes(f));
console.log(filterFruits);
