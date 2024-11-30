// 1 - for loop to print 1 to 10

/* for (let i = 0; i <= 10; i++) {
    console.log(i);   
} */

// 2 - while loop to calculate the sum of numbers from 1 to 100.

/* sum = 0 
i = 0
n = 100
while (i <= n) {
    sum += i
    i++
}

console.log(sum); */

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
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("\n");
}
*/

// sum of given array

/*
let numbers = [10, 20, 30, 40, 50]
sum = 0 
for(i=0 ; i < numbers.length; i++){
    sum += numbers[i]
}

console.log(sum);
*/

// max num using for of loop

/*
let arr = [3, 5535, 7,34,2, 2, 98]
max_num = 0

for (i of arr) {
    if (i > max_num) {
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

for ( i in user){
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


