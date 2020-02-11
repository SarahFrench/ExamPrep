let array1 = [1,2,3,4,5];
console.log(`
  My array is: [${array1}]`);

//length
console.log(`
  It's length is: ${array1.length}`);

//concatenating arrays
let array2 = [6,7,8,9];
let array3 = array1.concat(array2);
console.log(`
  Concatenating array 1: [${array1}] and array2: [${array2}]
  makes: [${array3}]`);

console.log(`  This doesn't affect the original array, which still contains only 5 elements: ${array1}`);

//indexOf finds the index of the first element that matches a value (arg1), and can start searching from a given index (arg2)
console.log("  5 occurs in array 1 at index: ", array1.indexOf(5));
console.log("  I can skip searching in an array, for example [1,2,3,1].indexOf(1,1) will miss the matching value at position 0 and instead say: ", [1,2,3,1].indexOf(1,1));
//lastIndexOf searches in the other direction, from end to start of the array
console.log(`
  indexOf and lastIndexOf functions search in opposite directions and find the first match:
  [1,2,3,4,5,3,2].lastIndexOf(2) => ${[1,2,3,4,5,3,2].lastIndexOf(2)}
  [1,2,3,4,5,3,2].indexOf(2) => ${[1,2,3,4,5,3,2].indexOf(2)}
  `);


//join makes a string with all array elements joined by a delimiter you choose. Default: comma
console.log(`
  Joining arrays using the join method creates strings from all the elements. The default delimiter is a comma, but you can change it by passing in a string argument to join:
  [1,2,3,4].join() => ${[1,2,3,4].join()}
  [1,2,3,4].join('+') => ${[1,2,3,4].join('+')}
  [1,2,3,4].join(' and-a ') => ${[1,2,3,4].join(' and-a ')}
  The original array is unaffected
  `);

//reverse
let x = [1,2,3,4];
console.log(`
  Arrays can be reversed
  [1,2,3,4].reverse() => [${x.reverse()}]
  The original array IS AFFECTED: [${x}]
  `);

//sort
let y = [3,2,1,4,7,5,6];
console.log(`
  Arrays can be sorted
  [${y}].sort() => [${y.sort()}]
  The original array IS AFFECTED: [${y}]
  `);

//slice
let z = [1,2,3,4,5];
console.log(`
  Arrays can be sliced to retrieve subsections
  These are defined by the 2 arguments: start index and end index (not inclusive)
  [${z }].slice(1,1) => [${z.slice(1,1)}] //from index 1 by not including index 1
  [${z }].slice(1,2) => [${z.slice(1,2)}] //from index 1 to 2, not including 2
  [${z }].slice(1) => [${z.slice(1)}] //from index 1. No second arg; until end of array
  The original array is unaffected: [${z}]
  `);

//splice
let a = [1,2,3,4,5];
let b = a.splice(1,3, "two", "three", "four");
console.log(`
  Arrays can be spliced to:
  A) replace elements at specific places
  B) retrieve the old values
  Arguments passed in are the start index, the number of sequential elements to replace, the values for each
  [1,2,3,4,5].splice(1,3, "two", "three", "four") => [${a}]
  Splice returns the original values in an array => ${b}
  `);

console.log("There are some methods for arrays that would allow you to implement a queue or a stack: pop and push");

//pop and push
let c = [1,2,3,4,5];
console.log(`
  Arrays can have stack functionality by adding and removing elements from the end:
  [${c}].pop() => removes [${c.pop()}] to leave [${c}] behind
  [${c}].push(5) => add ${c.push(5)} to the end to get [${c}]

  pop returns the removed value and alters the original array.
  push returns the added value and alters the original array.
  `);

//shift and unshift
let d = [1,2,3,4,5];
console.log(`
  The above functions can be combined with their opposites (shift and unshift) to create queues.
  [${d}].shift() => removes [${d.shift()}] to leave [${d}] behind
  [${d}].unshift(1) => returns the new length (${d.unshift(1)}) after adding 1 to the start, resulting in [${d}]

  shift returns the removed value from the START and alters the original array.
  unshift returns the new length after adding value(s) to the START and alters the original array.
  `);
