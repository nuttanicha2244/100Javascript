//bad
let book = { title: "js", price: 300 };
//ระวังเราอาจจะเผลอ reassign โดยไม่ตั้งใจ

book = "new book";
console.log(book);

//good
const book2 = { title: "js", price: 300 };

// ไม่สามารถที่จะ reassign ได้
// book2 = 'new book';

book2.author = "beer";
book2.title = "php";
book2.price = 400;

console.log(book2);
for (let index = 0; index < 5; index++) {
  let numbers = []; //ระวัง
  numbers.push(index);
  numbers = 0; //กำหนดค่าได้
  console.log(numbers);
}
console.log("======================");
for (let index = 0; index < 5; index++) {
  const numbers = []; //good
  numbers.push(index);
  console.log(numbers);
}
let arr = [1, 2, 3, 4]; //bad

const arr2 = [1, 2, 3, 4]; //good
