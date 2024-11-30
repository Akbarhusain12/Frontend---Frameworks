// let heros = ['IronMan', 'batman','Hulk']

// for (i of heros) {
//     console.log(i.toUpperCase());
    
// }


// Q 1

// let std = [85,84,95,90,50]

// let avg = 0 

// for (element of std) {
//     avg = element + avg
// }

// console.log(avg/std.length);


// Q 2
let items = [250, 645, 300, 900, 50];
let newarr = [];

for (let i of items) {
    newarr.push(i / 10);
}

let result = [];
for (let i = 0; i < items.length; i++) {
    result.push(items[i] - newarr[i]);
}

console.log(result);

