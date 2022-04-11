'use strict';

function sum(from, to, resolver) {
    let sum = 0;
    for (let index = 0; index < to; index += 1) {
        sum += index;
    }

    resolver(sum);
}

//input: num
// return: undefined
function printResult(res) {
  console.log('Result is' + res);
}


sum(10, 16, printResult);

function alertResult(res) {
  console.log('Result is' + res);
}

sum(10, 16, alertResult);