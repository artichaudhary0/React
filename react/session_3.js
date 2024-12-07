console.log("Session 3");

/**
 * Pure Function
 * Avoiding shared state
 * Avoid Mutation of data
 * Side effects
 * Declarative in nature
 */

// Pure Function? In simple terms, pure functions do not depends on external state. Therefore, the same input parameters will give the same deterministic output regardless of how many times you run the function.

function sum(a, b) {
  let sum = a + b;
  return sum;
}

sum(2, 3);
sum(2, 3);
sum(2, 3);
sum(2, 3);
sum(2, 3);
sum(2, 3);

const num = 10;

function sum2(a, b) {
  return a + b + num;
}

function sum3(a, b) {
  console.log(a + b);
}

sum2(2, 3);
sum2(2, 3);
sum2(2, 3);
sum2(2, 3);

/**
 * Advantages of pure functions:
 * A pure function works as an independent function that gives the same output for the same inputs.
 * Pure functions are readable because of independent behavior. Moreover, they are straightforward to debug and write test cases.
 * You can clone an external state into a pure function, but it does not change the purity of the function. - HOLD
 */

//Impure Function: An impure function is a function that contains one or more side effects. It mutates data outside of its lexical scope and does not predictably produce the same output for the same input.

// What is side effects?
// Dependency on external is state is an example of side effects
// Not returning anything is also an example of side effect

function addProperty(obj, key, val) {
  // Make a perfect deep copy and then do mutation
  obj[key] = val;
  return obj;
}

function pureAddProperty(obj, key, val) {
  const temp = { ...obj };
  temp[key] = val;
  return temp;
}

const obj = {
  name: "crio",
};
// console.log(addProperty(obj, "domain", "IT"));
// console.log(obj);

// console.log(pureAddProperty(obj, "domain", "IT"));
// console.log(obj);

/**
 * The following JavaScript functions are inherently impure:
 * Math.random()
 * Date.now()
 * arr.splice()
 * arr.push()
 * arr.sort()
 * console.log() and alert() are also impure functions (although they generate the same behavior and always return the same value for identical calls).
 * JavaScript is synchronous by its nature. Therefore, asynchronous functions such as fetch and promise are impure.
 *
 * Advantages of impure functions:
 * Impure functions can use an in-place solution to reduce the space complexity.
 * In impure functions, the state can be modified to use the parent variable and call for the function compiling.
 */
function addElem(arr, val) {
  const temp = [...arr];
  temp.push(val);
  return temp;
}
// const arr = [1, 2, 3];
// addElem(arr, 4); // [1,2,3,4]
// addElem(arr, 5); // [1,2,3,5]

const student = {
  name: "Test",
  roll: 7,
  address: {
    city: "Bangalore",
    country: "IN",
  },
  getRollNo: function () {},
};

// shallow copy, deep copy
const studentCopy = { ...student, address: { ...student.address } };
student.address.city = "Patna";

// studentCopy.test = "Hey";
console.log(studentCopy);

// HOF?
// Those functions which receive any other fn as argument is HOF
// Those functions which return a new function is HOF
// Those function which does both of above is also HOF

function printName() {
  console.log("CrioDo");
}

function executor(cb) {
  cb();
}

function executor2() {
  return () => {
    console.log("Hey There");
  };
}

function executor3(cb) {
  cb();
  return () => {
    console.log("Hey There");
  };
}

executor(printName);

// map, filter, reduce, find

// arr.map(() => {})

