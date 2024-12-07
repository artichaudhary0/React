const a = {};
// console.log(a);

const arr = [];
// console.log(arr);

const x = new Object();
// console.log(x);

const student = {
  name: "Alok Raj",
  roll: 7,
  subject: "CSE",
  about: function () {
    console.log("I Love JS");
  },
  favColor: "black",
  address: {
    state: "Bihar",
    country: "IN",
  },
};
// 220M
// console.log(Object.entries(student));
// console.log(Object.keys(student));
// console.log(Object.values(student));

const tempObj = new Object(student);
const temp = student;

const newObj = Object.assign({}, student);

newObj.name = "crio.name";
student.name = "Crio.Do";
student.address.state = "KA";

// console.log(tempObj);
// console.log(temp);
// console.log(newObj);
// console.log(student);

const employeeData = {
  John: 100,
  Pete: 500,
  Mary: 250,
};

class Util {
  constructor(employeeData) {
    this.data = employeeData;
  }

  sumSalaries() {
    const valArr = Object.values(this.data);
    // [100, 500, 250]
    return valArr.reduce((a, b) => a + b, 0);
  }

  averageSalary() {
    const total = this.sumSalaries();
    const numberOfEmployee = Object.keys(this.data).length;
    return Math.round(total / numberOfEmployee);
  }

  findSalaryRange() {
    const salaryArr = Object.values(this.data);
    // [100, 500, 250], Math.max(100, 500, 250)
    return Math.max(...salaryArr) - Math.min(...salaryArr);
  }
}

const util = new Util(employeeData);

// console.log(util.sumSalaries());
// console.log(util.averageSalary());
// console.log(util.findSalaryRange());

// class BASIC = {
// transcations
// rewardPoint
// loan
// }

// class AMAZONCARD extends BASIC {
// amazonCashback
// }

// class NEWAMAZONCARD extends AMAZONCARD {

// }

// class SWIGGYCARD extends BASIC {
// swiggyCashback
// }

// BASE/Parent Class
class Student {
  constructor(name, roll) {
    this.fullName = name;
    this.roll = roll;
  }

  markAttendance() {
    console.log(this.fullName, "is present");
  }
}

// Child/Derived
class SportsCaptain extends Student {
  playFootball() {
    console.log("Play football");
  }
}

const stu = new Student("KK", 10);
// console.log(stu);

const s1 = new SportsCaptain("Swapnil", 7);
// console.log(s1);

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  markPresent() {
    console.log(this.name, "is present");
  }
  getRole() {
    console.log("Employee of office");
  }
}

class Developer extends Employee {
  constructor(name, department, prefLang) {
    super(name, department);
    this.prefLang = prefLang;
  }

  submitCode() {
    console.log("Code Submitted by", this.name, "from", this.department);
  }
  getRole() {
    console.log("Works with ", this.prefLang);
  }
}

const rajesh = new Employee("Rajesh", "Design");
const akhila = new Developer("Akhila", "IT", "JavaScript");
// rajesh.markPresent();
// akhila.markPresent();
// akhila.submitCode();

rajesh.getRole();
akhila.getRole();

class BasicCreditCard {
  constructor(brand, cvv, expiry) {
    this.brand = brand;
    this.cvv = cvv;
    this.expiry = expiry;
  }

  rewardPoint() {
    console.log("5 reward point for every transactions");
  }
}

class AmazonCreditCard extends BasicCreditCard {
  constructor(brand, cvv, expiry, accountType) {
    super(brand, cvv, expiry);
    this.accountType = accountType;
  }

  rewardPoint(type) {
    console.log(type);
    console.log("10 reward point for every transactions");
  }

  amazonCashback() {
    const isPrime = this.accountType === "prime";
    console.log(isPrime ? "5% cashback" : "3% cashback");
  }
}

const base1 = new BasicCreditCard("Amazon", "422", "12March2029");

const card1 = new AmazonCreditCard("Amazon", "422", "12March2029", "prime");
console.log(card1.amazonCashback());
