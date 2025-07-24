//bad
interface Example {
    diff(one:string):number;
    diff(one:string, two:string):number;
    diff(one:string, two:string, three:boolean):number;
}
//good
interface Example2 {
    diff(one: string, two?: string, three?: boolean): number;
}