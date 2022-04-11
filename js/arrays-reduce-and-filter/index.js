'use strict';

//FILTER
// input: func
//output: arr

//input: number, index (optional), arr (optional)
//output: boolean
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

//option 1
function filterCallback(num) {
  return num > 5;
}

anotherNumbersList.filter(filterCallback);

//option 2
const filterRes = anotherNumbersList.filter(function (sum) {
  return num > 500;
});

//option 3
const filterCall = anotherNumbersList.filter(num => num > 5);

//map

const numbersList = [5, 0, 8, 10, -4, 50, 220];

//input: func
//output: arr

//input: el
//output: modified el

const mapRes = numbersList.map(el => {
  return el * el;
});

// find
// input: func
// out: el

//input: el
//output: boolean


//option 1

// numbersList.find(el => {
//   if (el % 2 === 1) {
//     return true;
//   } else {
//     return false;
//   }
// });

numbersList.find(el => el % 2 === 1);


//some

//input: func
//output: boolean

//forEach
//input: el
//output: undefined


//callback
//input: el
//output: undefined

numbersList.forEach(el => {
    if (el < 0) {
        console.log(el);
    }
});

//============================ filter ===========



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

console.log(filterArrayElements([8, 2, 4, 4], callback2));

//test data 3

const callback3 = val => {
  return (val += 3) < 10;
};
const arr2 = [8, 12, 4, 6, 7];
console.log(filterArrayElements(arr2, callback3));



function sum(a, b) {
  console.log([arguments]);
  return a + b;
}

console.log(sum(5, 9, 5));
