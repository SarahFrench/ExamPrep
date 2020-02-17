//x gets hoisted and, when declared with the var keyword, is initialised with value 'undefined'
// => no exception thrown when try to access value, as there is a value despite no assignment yet.
console.log(x);

//y gets hoisted but, due to declaration with the let keyword, is not initialised yet
// => an exception is thrown when try to access value, as there's no value
console.log(y);

var x = 7;
let y = 5;


//JS interpreter interprets the lines above as separate declaration and initialisation.
//The declaration is hoisted but the initialisation IS NOT
