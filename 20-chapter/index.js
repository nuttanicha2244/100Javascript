// old way
function User (fullname) {
    this.fullname = fullname;
}
User.prototype.getFullname = function () {
    return this.fullname;
}
const u = new User("Mary Doe")
console.log(u.getFullname());

//new way

class User2 {
    constructor(fullname){
        this.fullname = fullname;
    }
    getFullname(){
        return this.fullname;
    }
}
const u2 = new User2("Bob Doe");
console.log(u2.getFullname());