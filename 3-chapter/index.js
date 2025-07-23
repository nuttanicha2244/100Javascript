// bad
const value = 0;
const result = value || 3000;
console.log(result);

console.log('=================');

//good
const value2 = 0; // check null or undefinded only
const result2 = value2 ?? 3000;
console.log(result2);

console.log('=================');

//good2
let value3 = 4000; // check null or undefinded only
value3 ??= 3000;
console.log(value3);