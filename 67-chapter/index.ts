//ใช้ enum เพื่อกำหนดค่าคงที่

//bad
type userRole ={
    role: string        
}
function assignRole(userRole: userRole) {

    console.log(userRole.role);
}
assignRole({ role: "admin" });

//good
enum userRole2 {
    Member = "member",
    Admin = "admin",
    Manager = "manager",    
}
function assignRole2(userRole: userRole2) {

    console.log(userRole);
}
let x =userRole2.Member
assignRole2(x);