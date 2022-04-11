'use strict';

const transactions = [34, 23, 3];

//in: arr, call
//out: arr


//for func call
//in: el
//out: boolean

//algo
//1. iterate arr
//2.apply callback to el
//3.if true - push to res arr
//4.
const filterArrayElements = (arr, callback) => {
    const res = [];
    for (let index = 0; index < arr.length; index += 1) {

        if (callback(arr[index])) {
            res.push(arr[index]);
        }
    }

    return res;
};

//test lesson 
const arr = ['Oleg', 'Yaroslav', 'Inna'];
const callback = el => el.includes('a');

console.log(filterArrayElements(arr, callback));

//test data 2
const callback2 = val => {
  return val <= 4;
};

const res = filterArrayElements([8, 2, 4, 4], callback);

console.log(res);


function sum(a, b) {
    console.log([arguments]);
    return a + b;
}

console.log(sum(5, 9, 5))