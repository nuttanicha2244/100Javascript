const obj = {fullname: ' Jone' };
const hiddenKey = Symbol ('hidden');

    obj ['fullname']= 'John';
    obj [hiddenKey]='secret password';

    for (const key in obj) {
        console.log(key);
    }
console.log(Object.values(obj));
console.log(Object.entries(obj));

const s = Object.getOwnPropertySymbols(obj);
const password = obj[s[0]];
console.log(password);

Object.getOwnPropertySymbols(obj).forEach(sym => {
    console.log(obj[sym]);
});

// const hideenKey2 = Symbol(' hidden2 ');
// const map = new Map ();
// map.set(hiddenKey2, 'my password')

// ไม่นำ secret ออกไปเช่นเดียวกัน
console.log(JSON.stringify(obj));