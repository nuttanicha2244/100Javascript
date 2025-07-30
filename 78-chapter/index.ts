//ใช้ Union | intersection Types เพื่อความยืดหยุ่น
type ResponseStatus ={
status: string;
}

type ResponseStatus2 ={
    code: number| string
};

type GeneralStatus = ResponseStatus & ResponseStatus2;

let gs: GeneralStatus ={ code: 200, status: "500" };
let gs2: GeneralStatus = { code: "400", status: "500" };