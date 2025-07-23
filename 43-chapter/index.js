function badPractice() {
  myGlobal = "this is global!!!!!"; // ไม่มี var let const
}
badPractice();
console.log(myGlobal);
myGlobal = "test";
console.log(myGlobal);
// ให้ระวังไว้ด้วย ต้องกำหนด สโคป