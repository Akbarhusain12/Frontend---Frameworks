// 1 - for loop to print 1 to 10

/* for (let i = 0; i <= 10; i++) {
    console.log(i);   
} */

// 2 - while loop to calculate the sum of numbers from 1 to 100.

/*
sum = 0
i = 0
n = 5
while (i <= n) {
    sum = sum + i
    i++
}

console.log(sum); 
*/

// nested loop

/*
for (let n = 1; n <= 5; n++) {
    let pat = "";
    for (let j = 1; j <= n; j++) {
        pat += "*"; 
    }
    console.log(pat);
}
*/

// table 1 to 5

/*
for (let i = 0; i <= 5; i++) {
  for (j = 0; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
*/

// sum of given array

/*
let numbers = [10, 20, 30, 40, 50]
sum=0
for(i = 0; i<numbers.length; i++){
  sum += numbers[i]
}

console.log(sum);
*/

// max num using for of loop

/*
let arr = [3, 5535, 7,34,2, 2, 98]
max_num = 0

for (i of arr){
  if(max_num < i){
    max_num = i
  }
}

console.log(max_num);
*/

// use a for...in loop to print all key-value pairs.

/*
let user = {
  name: "John",
  age: 25,
  city: "New York",
};

for (i in user){
    console.log(i, user[i]);
}

*/

// Write a function that takes an object and a string as input and checks if the string is a key in the object

/*
function obj_str(a, b) {
    if (b in a) {
      console.log("Yes, it is present");
    } else {
      console.log("Nope! It's not present");
    }
  }
  
  const x = {
    name: "John",
    age: 25,
    city: "New York",
  };
  
  const str = "age";
  obj_str(x, str);
*/

// Write a program that prints all numbers from 1 to 10, but skips the number 5

/*
for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        continue
    }
    console.log(i);    
}
*/

// Create a program that prints numbers from 1 to 20 but stops when it encounters a number divisible by 7

/*
for (let i = 1; i <= 20; i++) {
  if (i % 7 == 0) {
    break;
  }
  console.log(i);
}
*/

//Create an object to represent a book with properties: title, author, and year. Access and print each property.

/*
let book = {
    title : "The Power Of Now",
    author : "Richard"
}

for ( i in book){
    console.log(i,"-",book[i]);
}
*/

//Write a program to update the value of an object’s property and add a new property to the object.

/*
let car = {
    Name : "Bently",
    color : "Purple",
    Wheel : 2
}

car.Wheel = 4

console.log(car);
*/

//Create an object calculator with two methods: add(a, b) and multiply(a, b). Test the methods.

/*
let calculator = {
  add1: function add(x, y) {
    return x + y;
  },

  mul1: function mul(x, y) {
    return x * y;
  },
};

console.log(calculator.add1(10,20));
console.log(calculator.mul1(10,20));
*/

//Write an object person with properties firstName and lastName and a method getFullName() that returns the full name.

/*
let person = {
  firstName: "Akbar",
  lastName: "Husain",
  fullName: function full_na(firstName, lastName) {
    console.log(person.firstName +" " +person.lastName);
    
  },
};

person.fullName()
*/

//Write a function that takes an object as input and returns an array of all the keys in the object.

/*
function example(obj) {
  return Object.keys(obj);
}

const x = {
  firstName: "Akbar",
  lastName: "Husain",
};

console.log(example(x)); 
*/

//Write a program to merge two objects:javascript

/*
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  c: 3,
  d: 4,
};

let obj3 = {
  ...obj1,
  ...obj2
};

console.log(obj3);
*/

// Working with Arrays of Objects

/*
let students = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 23 },
];

let oldestStudent = students.reduce((oldest, current) => {
  return (current.age > oldest.age) ? current : oldest;
});

console.log("Oldest student:", oldestStudent);


students.forEach(student => {
  student.grade = Math.floor(Math.random() * 10);
});

console.log("Students with grades:", students);
*/

//Create a function that takes an object and returns a deep clone of it (without using JSON methods).

/*
const originalObject = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA',
  },
};

const clonedObject = originalObject
console.log(clonedObject);
*/

// Basic String Manipulation
/*
let x = "Hello, World!"
console.log(x.length);
*/

/*
function isLonger(str1, str2){
  if(str1.length > str2.length){
    console.log(str1);
  }
  else{
    console.log(str2)
  }
}

isLonger("Akbarhusain", "Wali")
*/

/*
let x = "JavaScript"
console.log(x[0]);   
console.log(x[x.length - 1]); 
*/

/*
function num_charat(a, b) {
  console.log(a[b]);
} 

num_charat("akbarhusain", 5)
*/

/*
let x = "HEllo"
let y = "javascript"

console.log(x.toLowerCase())
console.log(y.toUpperCase())
*/

/*
let toggleCase = (str) => {
  let x = "";
  for (let i of str) {
    if (i === i.toUpperCase()) {
      x += i.toLowerCase();
    } else {
      x += i.toUpperCase();
    }
  }
  return x;
};

console.log(toggleCase("Hello"));
*/

// x = "Akbar"
// age = 22

// console.log(`My name is ${x} and I am ${age} years old`);

// y = "apple,banana,orange"

// x  = y.split(",")
// console.log(x);

// x = "This is a test. Is it working?"
// console.log(x.replace(/is/,"was"));
