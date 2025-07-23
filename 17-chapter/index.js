console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

console.log(JSON.parse('{"id":9007199254740999}')); //ปัดค่าไม่แม่นยำ

const jsonData = '{"id":"9007199254740999" }'; //ผลลัพธ์ต้องไม่เพี้ยน ต้องตรงกับที่มี

const data = JSON.parse(jsonData, (key,value) => {
    if (key === 'id') {
        return BigInt(value);
    }
    return value;
});
console.log(data);