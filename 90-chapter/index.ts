// //ระมัดระวังการใช้ Object.keys() กับ Object ที่มี value

// const person ={name:'beer', age:22}

// const keys =Object.keys(person) as xxxx;

//good
const person ={name:'beer', age:22}

const keys =Object.keys(person) as Array<keyof typeof person>;
keys.forEach((key) => {
    const value = person[key]
    console.log(value);
});
