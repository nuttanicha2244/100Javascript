// แบบเก่า
const obj = {a:1, b:2 , c:3};


Object.keys(obj).forEach(key => {
    // console.log(key);

    console.log(obj[key]); //ถ้าอยากได้values 1 2 3 
});

console.log('=====================');
//ใหม่
Object.entries(obj).forEach(([key,value]) =>{
    console.log(key);
    console.log(value);
});
console.log('=====================');
Object.values(obj).forEach(value => console.log(value));
console.log("===============");
const valueArray =Object.values(obj);
console.log(valueArray);
console.log('===============');
const entriesArray = Object.entries(obj);
console.log(entriesArray);
