import { test } from 'node:test'
import { equal } from 'node:assert'

const sum = (a, b) => a+b;
console.log(sum(10,2));

// เขียนเทส ฟังชั่น sum

test('sum should return correct result', () => {
    equal (sum(1,1),2); //ตรวจสอบว่า 1+1 = 2 ?
    equal (sum(-1,1),0); //ตรวจสอบว่า -1+1 = 0 ?
    
});