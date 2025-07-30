//NonNullable<T> เพื่อให้แน่ใจว่า T ไม่ใช่ null หรือ undefined

type MaybeString = string | null | undefined;
function processString(value:NonNullable <MaybeString>) {
    console.log(value?.toUpperCase);
}
const myString =null;

if (myString != null) {
processString(myString); // จะเกิดข้อผิดพลาดที่นี่เพราะ myString เป็น null ถ้าไม่เขียนif check
}

const myString2 = "Hello, World!";
processString(myString2); // จะทำงานได้ถูกต้อง เพราะเป็น string