console.log("5" + 10); //แปลง 10 เป็น string ก่อนแล้วมาต่อกัน 510

console.log(Number("5") + 10); // good

console.log("5" - 2); //แปลง 5 เป็น Number

console.log(true + 1); //true ถูกแปลงเป็น 1
console.log(false + 1); //false ถูกแปลงเป็น 0

//good
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean("")); //false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean("hello")); //true