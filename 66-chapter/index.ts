// bad
interface UserEvent{
    showMessage(m: number): string;
    showMessage(m: string): string;
    showMessage(m: boolean): string;
}

//good
interface UserEvent2 {
    showMessage(m: string | number | boolean): string;
}