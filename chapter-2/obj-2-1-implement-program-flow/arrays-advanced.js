function isEven(number){
  return number % 2 === 0;
}

let array1 = [1,2,3,4,5];
console.log(`
  My array is: [${array1}]`);

//every method
console.log(`
  using the every method:
  var outcome = array.every(<callback>, this);
  outcome === true if the callback returns/evaluates true for every element
  works like AND logic

  [1,2,3,4,5].every(isEven, this)) => ${[1,2,3,4,5].every(isEven, this)}
  [2,4,6,8,10].every(isEven, this) => ${[2,4,6,8,10].every(isEven, this)}
  `);

//some method
console.log(`
  using the some method:
  var outcome = array.some(<callback>, this);
  outcome === true if the callback returns/evaluates true for ANY of the elements
  works like OR logic

  [1,2,3,4,5].some(isEven, this)) => ${[1,2,3,4,5].some(isEven, this)}
  [1,3,5,7,9].some(isEven, this)) => ${[1,3,5,7,9].some(isEven, this)}


  `);

//forEach method
console.log(`
  the forEach method iterates through all elements and applies a callback
  E.g.: [1,2,3].forEach(function(x){console.log(x)});
  E.g.: [1,2,3].forEach(function(x, i){console.log(\`position \${i}: \${x}\`)});
  `);

//filter method
console.log(`
  the filter method returns all elements which cause a callback to return true
  original array is unaffected
  [1,2,3,4,5].filter(isEven) => [${[1,2,3,4,5].filter(isEven)}]
  `);

//map method
console.log(`
  using the map method returns an array containing the outcomes of running elements through a callback
  original array is unaffected
  [1,2,3,4,5].map(function(x){ return x % 2 === 0 ? "even" : "odd"}) => [${[1,2,3,4,5].map(function(number, position){ return number % 2 === 0 ? `Element ${position} is even` : `Element ${position} is odd`})}]
  `);

//reduce and reduceRight method
console.log(`
  using the reduce method returns value created by a callback running over every element
  it is recursive; the value returned by the callback is passed into the callback when it's invoked on the next elements
  original array is unaffected

  E.g. this can be used to sum numbers in an array
  [1,2,3,4,5].reduce(function(accumulatedValue, nextValue){ return accumulatedValue + nextValue }) => ${[1,2,3,4,5].reduce(function(accumulatedValue, nextValue){ return accumulatedValue + nextValue })}
  ["h","e","l","l","o"].reduce(function(accumulatedValue, nextValue){ return accumulatedValue + nextValue }) => ${["h","e","l","l","o"].reduce(function(accumulatedValue, nextValue){ return accumulatedValue + nextValue })}

  reduce goes through the array from start to end. reduceRight goes through from end to start;
  ["h","e","l","l","o"].reduce(function(accumulatedValue, nextValue){ return accumulatedValue + nextValue }) => ${["h","e","l","l","o"].reduceRight(function(accumulatedValue, nextValue){ return accumulatedValue + nextValue })}
  `);
