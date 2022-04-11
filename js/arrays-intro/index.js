'use strict';
// let, var, const
//let message = "hello";
//console.log(message);
const numbersList1 = [1, 2, 3, 4];
// const numbersList1 = new Array(1, 2, 3, 4);

console.log(numbersList1);

//pop
//input: none
//return: number
const res = numbersList1.pop();
console.log(res);
console.log('after pop ' + numbersList1);


//push
const numbersList2 = [1, 2, 3, 4, 5];
//input: number
//return: number
console.log('before push ' + numbersList2);

const pushRes = numbersList2.push(88);
console.log(pushRes);
console.log('after push ' + numbersList2);


//shift
const numbersList3 = [1, 2, 3, 4, 5];
//input: none
//return: number
console.log('before push ' + numbersList3);

const shiftRes = numbersList3.shift();
console.log(shiftRes);
console.log('after push ' + numbersList3);


//unshift
const numbersList4 = [1, 2, 3, 4, 5];
//input: element
//return: array.length
console.log('before push ' + numbersList4);

const unshiftRes = numbersList4.unshift();
console.log(unshiftRes);
console.log('after push ' + numbersList4);

