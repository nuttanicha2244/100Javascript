//html
<button id="MyButton">กดฉันสิ</button>

//JS

const MyButton = document.getElementById('MyButton');

function handleClick() {
    alert('Hello');
}


MyButton.getElementById('MyButton').addEventListener('click', handleClick,{
    once: true //good ถ้าต้องการให้ฟังก์ชันทำงานแค่ครั้งเดียว
});
