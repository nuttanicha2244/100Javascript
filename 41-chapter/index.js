const arr = [1, 2, 3, 4];
console.log(arr);
delete arr[2];
console.log(arr);
console.log(arr[2]);
console.log(arr.length);

console.log('----splice----');
const arr2 = [1, 2, 3, 4];
console.log(arr2);
arr2.splice(2,1);
console.log(arr2);
console.log(arr2[2]);
console.log(arr2.length);
