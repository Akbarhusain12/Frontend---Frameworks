//Map()

// let arr= [2, 4, 8, 10]
// let updatedArr = arr.map(val=> val+2)
// console.log(arr);
// console.log(updatedArr);


// Filter

// const numbers = [];

// for (let i = 0; i <= 100; i++) {
//     numbers.push(i);
// }
// const evens = numbers.filter(item => item % 2 === 0);
// console.log(evens);

//Reduce

// let arr = [0,  2,  4,  6,  8, 1340,  12, 14, 16]

// let add = arr.reduce((prev, curr)=>{
//     return prev > curr ? prev : curr

// })
// console.log(add);

// Q 1

// let arr = [60,  23,  90,  98,  93, 88,  72, 64, 56,99]

// let add = arr.filter((prev)=>{
//     return prev > 90

// })
// console.log(add);

// Q 2

n = prompt("Enter a number");
val = [];

for (let i = 0; i < n; i++) {
  val.push(i);
}

let sum1 = val.reduce((x,y) => {
    return x + y
});
console.log(sum1);
