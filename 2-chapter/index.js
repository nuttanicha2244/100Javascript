const numbers = [1, 2];

//แบบเก่า
const result = numbers.map(function(num){
    return num * 2;
});
console.log(result);


// use arrow function
const result2 = numbers.map( num => num * 2);
console.log(result2);