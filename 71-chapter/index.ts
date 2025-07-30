export type User = {
    fullname: string;
    age: number;
    salary?: number;
}
const u: User = { fullname: 'John Doe', age: 30 }

type User2 = Partial<User>;

const u2: User2 = { fullname: 'Janey', salary: 1000 };

type User3 = Pick<User, 'fullname' | 'age'>; //คือการเลือกเฉพาะบาง property จาก type User

const u3: User3 = { fullname:'Beer',age:22};

type User4 = Omit<User, 'fullname'>; //คือการตัด property บางตัวออกจาก type User

const u4: User4 = { age: 25, salary: 5000 };