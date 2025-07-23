function showMessage (){
    // setInterval("js bad code " , 3000); // bad

    setInterval(() => {
        console.log('Hello js'); //good  ส่งฟังก์ชั่นเข้าไปแทน string // ทำซ้ำๆทุกช่วงที่ตั้งเวลาไว้
    }, 3000)
    setTimeout (() =>{
        console.log('ออกละ'); //ออกครั้งเดียวละจบ
    }, 3000)
}
showMessage();
