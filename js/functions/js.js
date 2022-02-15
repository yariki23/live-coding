//1
function getSenseOfLife() {
  return 42;
}

//options 1
const res = getSenseOfLife();
console.log(res);
//options 2
console.log(getSenseOfLife());

//2
function getSquared(num) {
  return num * num;
}

// function getSquared(num) {
//     console.log(num * num);
// }
// console.log(getSquared(4));

function sum(numFirst, numSecond) {
  return numFirst + numSecond;
}

// test data
console.log(sum(4, 5));
console.log(sum(111));
const first = 8;
const second = 10;
console.log(sum(first, second));

function print(age) {
  console.log(`I am ${age} years old`);
}

function print1(age) {
  console.log(`I am ${age} years old`);
  console.log(`Sense of life is ${getSenseOfLife()}`);
}

// 5
function sendEmail(userId) {
  const email = getEmailById(userId);
}

// arrow funcs
// 1
// option1
// const mult = (firstNum, secondNum) => {
//     return firstNum * secondNum
// }

//option 2
const mult = (firstNum, secondNum) => firstNum * secondNum;

function sum() {
    let test = "test";
}
console.log(test);
// test data
console.log(mult(20, 14));

const getMagicNumber = () => 17;