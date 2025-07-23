//old way

function add(a, b) {
    b = b!== undefined ? b : 10;
    return a+b;

}
console.log(add(5));

//new way
function add(a, b =10) {
    return a+b;

}
console.log(add(5));

// {}
// จะใส่ = หลัง moreMessage ( rest parameter )
function logMessage(message,...moreMessage){
    const message2 = moreMessage.length >0 ? moreMessage : ['default']
    console.log(message,message2);
}
logMessage('Hello Uniwordddddd');
logMessage('a','b','c','d');