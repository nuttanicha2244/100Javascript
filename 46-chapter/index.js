//bad

{/* <button onClick="alert ('Hello')">กดฉันสิ</button> */}

//good
<button id="MyButton">กดฉันสิ</button>

//JS
document.getElementById('MyButton').addEventListener('click',() => {
    alert('Hello');
});