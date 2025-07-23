//old way
const fullname = "Men";
const age = 24;

const message = "Hello  " + fullname + " age: " + age;
console.log(message);

//new way
const message2 = `Hello ${fullname} age: ${age}`;
console.log(message2);

const message3 = `Hello ${fullname.toUpperCase()} age: ${age + 10}`;
console.log(message3);
