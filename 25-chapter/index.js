// old way

const obj = { a: 1, b: 2, c: 3 };
console.log(obj.a, obj.b, obj.c);

function getObj(obj) {
  const a = obj.a;
  const b = obj.b;
  console.log(a, b);
}
getObj(obj);

// new way
const { a, b, c } = obj;
console.log(a, b, c);

const arr = [1, 2, 3];
//old way
const first = arr[0];
const second = arr[1];
//new way
const [first2, second2] = arr;
console.log(first2, second2);

//good
function getObj2(obj) {
  const { a, b , d =10} = obj;
  console.log(a, b,d);
}
getObj2(obj);


//best
function getObj3({a,b}) {

    console.log(a, b);
  }
  getObj3(obj);

  const user = { profile: { name: 'j' , age:20}};
  const { profile: {name: fullname,age}} = user;
  console.log(fullname,age);