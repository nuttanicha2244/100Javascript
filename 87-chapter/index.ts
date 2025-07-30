// const value:unknown = getValue();
// const name =(value as string).toLowerCase();

function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== 'string') throw new Error('not a string');
}

const value: unknown = 100;
assertIsString(value);
const fullname = value.toUpperCase();
console.log(fullname);