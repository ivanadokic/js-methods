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
