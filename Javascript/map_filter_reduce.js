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

let arr = [0,  2,  4,  6,  8, 1340,  12, 14, 16]

let add = arr.reduce((prev, curr)=>{
    return prev > curr ? prev : curr

})
console.log(add); 
