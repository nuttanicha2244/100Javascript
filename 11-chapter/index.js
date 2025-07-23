//แบบเก่า

const obj = {};
obj["fullname"] = "Marry";
obj["age"] = 20;
console.log(obj);
console.log(Object.keys(obj).length);
delete obj['age'];
console.log(obj);

console.log('***************************');

// แบบใหม่
const map = new Map();
map.set('Fullname','beer');
map.set('age','22');
console.log(map);
console.log(map.get('age'));
map.delete('age');
console.log(map.size);
