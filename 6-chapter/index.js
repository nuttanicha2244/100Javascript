const [posts, users, randomUsers] = await Promise.all([
    fetch ('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json()),
    fetch ('https://jsonplaceholder.typicode.com/users/2').then(response => response.json()),
    fetch ('https://randomuser.me/api/?results=3').then(response => response.json())
]);
console.log(posts);
console.log(users);
console.log(randomUsers);