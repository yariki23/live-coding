'use strict';

//in: obj, str, any
//out: obj
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// //test
console.log(addPropertyV1({ name: test }, 'age', 30));

function addPropertyV2(obj, key, value) {
  // input: obj1, obj2, obj3 ... obj N
  // out: obj
  // Object.assign(obj, { [key]: value });
  // return obj
  return Object.assign(obj, { [key]: value });
}
//test data
const testObj2 = { name: 'test' };
console.log(addPropertyV2(testObj2, 'age', 30));
//----------------------------

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

//test data
const testObj = { name: 'test' };
console.log(addPropertyV3(testObj, 'age', 30));

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

//test data
const testObj3 = { name: 'test' };
console.log(addPropertyV4(testObj3, 'age', 30));
