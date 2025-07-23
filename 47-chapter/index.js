//html
<button id="MyButton">กดฉันสิ</button>

//JS

const MyButton = document.getElementById('MyButton');

function handleClick() {
    alert('Hello');
    MyButton.removeEventListener('click', handleClick); //good
}


MyButton.getElementById('MyButton').addEventListener('click', handleClick);
