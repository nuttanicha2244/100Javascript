//แบบเก่า

function fetchData (){
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json ())
    .then( data => {
        console.log(data);
        return fetch('https://jsonplaceholder.typicode.com/users/' + data.userId)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

await fetchData();
console.log('====================');

//แบบใหม่ async await goodddd
async function fetchData2 (){
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const data = await response.json();
    console.log(data);
    const response2 = await fetch('https://jsonplaceholder.typicode.com/users/' + data.userId);
    const data2 = await response2.json();
    console.log(data2);
    }catch (error){
    console.log(error)
}
}

await fetchData2();

//top-level await ลดการใช้ async ลง   good
const response = await fetch ('https://jsonplaceholder.typicode.com/posts/3');
const data = await response.json();
console.log(data);