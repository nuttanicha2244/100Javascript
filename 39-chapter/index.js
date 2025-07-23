let users = ["beer", "men", "name", "am"];
let usersCount = users.length;

//bad
for (let i = 0; i < usersCount; i++ ) {
    console.log(users[i]);
}
console.log('--- for of ---');

//good
for (const user of users) {
    console.log(user);
}
let text = ' Hello JavaScript';
for (const element of text) {
    console.log(element);
}
let capitals = new Map([
    ['thailand','bangkok'],
    ['japan','tokyo']
]);
for (const [c,cap] of capitals) {
    console.log(`${c} ${cap}`);
}

let fruits = ['apple','banana'];
let colors = ['red','yellow'];
for (const fruit of fruits) {
    for (const color of colors) {
        console.log(`${fruit} minght be ${color}`);
    }
}