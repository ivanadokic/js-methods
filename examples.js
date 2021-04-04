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

## Use `.filter()` to filter an Array

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
//-------> Output: Array ["exuberant", "destruction", "present"]

//-------> Output: ["exuberant", "destruction", "present"]

[10, 20, 30, 40].filter(function() {
    return true;
  }) //=> [10, 20, 30, 40] (map, basically)
 
  [10, 20, 30, 40].filter(function(e) {
    return e < 30;
  }) //=> [10, 20]
 
  [10, 20, 30, 40].filter(function(e, index) {
    return index % 2 === 0;
  }) //=> [10, 30] (elements with an even-numbered index)

const myArray = [
  { id: 1, name: "Mark" },
  { id: 2, name: "Sam" },
  { id: 3, name: "Sandy" },
  { id: 4, name: "Mark" },
]

myArray.filter(element => element.name === "Mark")
//-------> Output : 0:{id: 1, name: "Mark"},
//                  1:{id: 4, name: "Mark"}


Subtract the numbers in the array, starting from the beginning:
var numbers = [125, 20, 25, 30];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
//=> 50
// .reduce()
[10, 20, 30, 40].reduce(function(memo, i) { return memo + i }) //=> 100
[10, 20, 30, 40].reduce(function(memo, i) { return memo + i }, 100) //=> 200


let students = [
    {
        firstName: 'Johnny',
        lastName: 'Lee',
        age: 20,
    },

    {
        firstName: 'Anna',
        lastName: 'Zax',
        age: 19,

    },

    {
        firstName: 'Zion',
        lastName: 'Sanches',
        age: 22,

    }
];

//sorts the students array by ages in ascending order:
students.sort((a, b) => {
    return a.age - b.age;
}); 

