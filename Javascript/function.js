/*
function add(x,y) {
    return x * y;
  }
  
  let value = add(7,7);
  console.log(value);
*/

function str(x) {
    let count = 0;
    for (let i of x.toLowerCase()) {
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
            count++
        }
    }
    return count;
}

console.log(str("Akbar husain"));


