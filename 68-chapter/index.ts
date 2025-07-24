interface User2 {
    fullname: string;
}

type User = {
    fullname: string;
}

const u: User = { fullname: "John Doe" };
console.log(u.fullname);

type AdminUser = User & {
   readonly role: string;
}

const adminUser : AdminUser = { fullname:"mary", role: "admin" };
console.log(adminUser.role);
