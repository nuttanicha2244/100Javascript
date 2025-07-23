const str = '2+5';
const result = eval(str);
console.log(result);

//กรณีที่เป็นbrowser
// const str2 = 'alert("hacked!")';
// const result2 = eval(str2);
// console.log(result2);

const str3 = '{"code":"alert();<br>"}'
const result3 = JSON.parse(str3);
console.log(result3.code);