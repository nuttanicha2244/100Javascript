//bad
function getDayname(day) {
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return " Tuesday";
  }
}
console.log(getDayname(5));

//good
function getDayname2(day) {
  switch (day) {
    case 1:
      return "Monday";

    case 2:
      return " Tuesday";

    default:
    //   return "day is invalid"
    throw new Error("day is invalid"); //โยนerror
  }
}
console.log(getDayname2(5));
//อย่าลืมใส่ break; ในกรณีที่ไม่ได้ return