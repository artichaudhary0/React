console.log("Session 1");

// class Car {
//     brand: ''
//     model: ''
//     color: '',
//     mileage: '',
//     variant: ''
// }
// class based lang
// class and object
// class -> Blueprint of object
// object -> instance of class

// const car1 = Car('Hyundai', 'Creta', 'spaceGrey', '11', 'petrol');

// const car2 = Car('Hyundai', 'Venue', 'white', '14', 'petrol');

// HP Laptop ->
// Model 1 -> one instance of Laptop class
// Model 2 -> one instance of Laptop class
// Model 3
// Model 4

// class -> new instance -> Object (class based lang)
// Object -> new instance -> Object (Prototype based lang)

// First, I am going to teach what is possible in JS
// JS -> Prototype based lang
// Object -> Object

// class

//

// const obj = {
//     name: 'Alok',
//     qualification: 'Engineer',
//     printFullName: function () {

//     },
//     address: {
//         city: 'Ban',
//         country: 'IN'
//     }
// }

// obj['address']['country']

// // Write Constructor function and later invoke it to get an object out of it.

// function Car(brand, color, mileage) {
//     this.brand = brand;
//     this.color = color;
//     this.mileage = mileage
// }
// // what is this keyword

// function Laptop ( ram, color) {
//     this.ssd = '512GB';
//     this.ram = ram;
//     this.color = color;
//     this.openPC = function () {
//         console.log('Laptop on')
//     }
// }

// const model1 = Laptop('512gb', '8bgb', 'black');

// {
//     ssd: '512gb'
// }

// const model2 = Laptop("512gb", "8bgb", "black");

// {
//     ssd2: '512gb'
// }

// function sum (a, b) {
// const result = a + b;;
// return result;
// }

function Circle(radii, x, y) {
  this.radius = radii;
  this.location = {
    x: x,
    y: y,
  };
  this.draw = function () {
    console.log(this.location);
  };
  this.move = function (nextX, nextY) {
    this.location = {
      x: nextX,
      y: nextY,
    };
  };
}

const circleObj = new Circle(10, 0, 0);
// const circleObj2 = new Circle(5, 4, 5);
// console.log(circleObj);
// console.log(circleObj2);

for (let index = 0; index <= 10; index++) {
  //   circleObj.move(index, index);
  //   circleObj.draw();
}

// what is `this` keyword
// this keyword references to object

// new keyword does 3 things
// 1. -> 200M Create a new object in the memory
// 2. Refers `this` keyword to newly created object, this -> 200M console.log(this) -> {}
// {} console.log(typeof this) // object

// return newly created object

// 200M -> {}
// this -> {
//     radius : 10
// }
// this.radius = 10;
// this -> object
function sum(a, b) {
  console.log(this);
  console.log(a + b);
}

// sum(2, 3);

const student = {
  name: "John",
  age: 20,
  grade: 8,
  displayInfo: function () {
    console.log(this);
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  },
};

// student.displayInfo();

function User(fullName) {
  this.fullName = fullName;
  this.friendList = [];
  this.addFriend = function (friendName) {
    this.friendList.push(friendName);
  };
  this.printFriendList = function () {
    this.friendList.forEach((friend) => console.log(friend));
  };
  this.findMutual = function (userObj) {
    const mutualFriends = this.friendList.filter((friend) =>
      userObj.friendList.includes(friend)
    );
    console.log(`Mutual Friends`, mutualFriends);
  };
}

const vivek = new User("Vivek Kumar");

vivek.addFriend("Harish");
vivek.addFriend("Radhe");
vivek.addFriend("Ajay");

// vivek.printFriendList();

const varun = new User("Varun");

varun.addFriend("Rohan");
varun.addFriend("Vatsal");
varun.addFriend("Radhe");
varun.addFriend("Harish");

// vivek.findMutual(varun);

const employee = {
  name: "John",
  age: 30,
  department: "IT",
  salary: 50000,
  displayInfo: function () {
    console.log(this);
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}, Salary: ${this.salary}`
    );
  },
};

const test = {
  name: "TEST",
  age: 30,
  department: "IT",
  salary: 50000,
  displayInfo: function () {
    console.log(this);
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}, Salary: ${this.salary}`
    );
  },
  something: "",
};

// employee.displayInfo();

const newDisplayInfo = employee.displayInfo.bind(test);

function executor(anotherFn) {
  anotherFn();
}

// executor(newDisplayInfo);

const timer = {
  currentTime: 0,
  showTime: function () {
    console.log("from here", this.currentTime);
  },
  addTen: function () {
    console.log(this);
    this.currentTime += 10;
    this.showTime();
  },
};

// timer.addTen();
const newTimer = timer.addTen.bind(timer);
// setTimeout(newTimer, 2000);

function Car(color, model, type) {
  this.color = color;
  this.model = model;
  this.type = type;
  this.start = function () {
    console.log("Car is starting!", model);
  };
}

const carObj = new Car("black", "XYZ", "Petrol");
console.log(carObj.start());

class CarClass {
  constructor(color, model, type) {
    this.color = color;
    this.model = model;
    this.type = type;
  }

  start() {
    console.log("Car is starting!", this.model);
  }
}

const car1 = new CarClass("red", "hjdsjb", "Diesel");
console.log(car1.start());

