function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6));
//-------> Output: 30

## Use `.map()` to transform an Array
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
//-------> Output: [2, 8, 18, 32]

[10, 20, 30, 40].map(function(a) {
  return a * 2;
}); 
//-------> Output: [20, 40, 60, 80]

const arr = [1, 2, 3, 4];

const newArray = arr.map(element => {
  return element * 2;
});

const newArrayOneLiner = arr.map(element => element * 2);

console.log(arr); // [1, 2, 3, 4]
console.log(newArray); // [2, 4, 6, 8]
console.log(newArrayOneLiner); // [2, 4, 6, 8]
## Use `.reduce()` to reduce an Array to a value

[10, 20, 30, 40].reduce(function(memo, i) { return memo + i }) //=> 100
[10, 20, 30, 40].reduce(function(memo, i) { return memo + i }, 100) //=> 200

//=>Subtract the numbers in the array, starting from the beginning:

var numbers = [125, 20, 25, 30];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
//=> 50
