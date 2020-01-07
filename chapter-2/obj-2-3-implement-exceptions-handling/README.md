## Chapter 2 - Part 3: Implement exception handling

Raising an error aka throwing an exception.

Handling exceptions is a good practice and referred to as defensive programming.
Another good practice is to check for undefined/null values (or use TypeScript...?).

```js
function russianRoulette(){
  try {
    //do something that may or may not throw errors
    console.log("No errors? Lets see...");
    if(Math.random() >= 0.5){
      console.log("No errors this time around");
    } else {
        throw Error("oh fudge");
    }
  } catch(err){
    console.log("ERROR!");
    console.log(err);
  } finally {
    console.log("This executes regardless of errors being thrown or not");
  }
}

```

`try` statements must have at least one of `catch` or `finally` blocks within them

variables declared in any of the try or catch blocks is out of scope if you use let/const because they're block-scoped. `var` is function scoped and I can access stuff declared in `try` in the `catch` block, but the book says I shouldn't be able to...whatever.

### Checking for undefined values

When a variable is declared by not assigned a value it is `undefined` (book says null, maybe that's what it was historically). In defensive programming you check for things like declared variables that haven't been assigned values yet:

```js
function calculateArea(x,y,z){
  if(x === undefined || y === undefined || z === undefined){
    throw new Error('Make sure calculateArea is given three arguments');
  }

  return x * y * z;
}

calculateArea(10, 5, 3);
// => 150
calculateArea(10, 5);
// => Error: Make sure calculateArea is given three arguments

```
