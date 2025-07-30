type Maybe<T> =T extends null | undefined ? never : T;
const m: Maybe<undefined> = undefined ;