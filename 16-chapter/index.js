const decimal = require('decimal.js');

console.log(0.1+0.2);

const result = new decimal.Decimal(0.11111111).plus(0.14);
const result2 = Number(result.toFixed(3));
console.log(result2); // number