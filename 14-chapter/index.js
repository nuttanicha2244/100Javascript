console.log('0' == 0); // ผลลัพธ์ออกมาเป็น true แต่มันไม่ได้เช็คชนิดข้อมูล (bad)

console.log('0' === 0 ); //ผลลัพธ์ออกมาเป็น false ซึ่ง มันเช็คชนิดข้อมูลแล้วว่า คนละชนิดกัน ทำแบบนี้จะได้ข้อมูลที่ถูกต้องกว่า(good)

// if (a === b) {
//      console.log('good');
// }