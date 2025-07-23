//old way

const user = new Object(); // new array() / new function()
user.fullname = "Ser";
user.age = 3;
console.log(user);

//new way good
const student = {
  fullname: "beer",
  age: 22,
};
const users = [];

// new array() / new function()
// new Number() / new Boolean()
// new String()/ new RehExp()
const func = function () {};
const isShow = true;

//ยกเว้น 
//new Map()
//new Date()