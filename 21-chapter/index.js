// old way
class User2 {
    constructor(fullname){
        this._fullname = fullname;
    }
    getFullname(){
        return this._fullname;
    }
}
const u2 = new User2("Bob Doe");
console.log(u2.getFullname());
console.log(u2._fullname); //ระวัง หลีกเลี่ยงการใช้ _ เพื่อระบุ private field

// new way
class User3 {
    #fullname // private field
    constructor(fullname){
        this.#fullname = fullname;
    }
    getFullname(){
        return this.#fullname;
    }
}
const u3 = new User2("Bob Doe");
console.log(u3.getFullname());
// console.log(u3.#fullname); //error