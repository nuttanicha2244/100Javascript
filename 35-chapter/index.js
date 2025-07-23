//bad

let name = "nuttanicha";
console.log(name); //ถ้าฝั่ง broeser อาจจะไปชนกับ window.name

//good
const user = {
  name: " Beer ",
};
console.log(user.name);
