'use strict';

const transactions = [34, 23, 3];
//for reduce
//in: func
//out: num


//for func call
//in: acc, el index, array (optional)
//out: acc


// transactions.reduce((acc, element) => {
//     console.log('acc = ' + acc);
//     console.log(element);

//     acc += 100;

//     return acc;
// }, 0)

const res = transactions.reduce((acc, element) => acc + element);

console.log(res)