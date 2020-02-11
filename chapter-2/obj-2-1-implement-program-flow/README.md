# Implementing program flow

To achieve this use:
- Logical operators
- If statements
- switch statements
- arrays

### Logical operators

\> < <= >= && || etc

### If

```
if(condition){

} else if (condition) {

} else {

}
```

### Ternary operators

`<expression>` ? <code if true> : <code if false>;`

```javascript
let x = 3;
console.log(x > 1 ? x = x*x : x = 0);
//=> 9

x = !isNaN(x) ? x : 0;
console.log(x);
//=> 9

```

### Switch

```
let x = "red";

switch(x){
  case "red":
    console.log("X is red!");
    break;
  case "blue":
    console.log("X is blue!");
    break;
  default:
    console.log("X is neither red nor blue");
    break;
}
```

- only the first case evaluated as true will be executed... but this relies on break keywords
  - break keywords are required; omitting = unexpected behaviour.
  - e.g. if you didn't include breaks and there's a default case then any case evaluated as true will be executed and ALSO the default block will run.
  - break keyword is also good to use as it prevents every case being evaluated after you've already found one to be true
- default = a fallback option


## Arrays

array.`length`

array.`indexOf`(<value>, <position start search from, L to R>)
array.`lastIndexOf`(<value>, <position start search from, R to L>)

array.`concat`(<array to add on end of array invoking concat>)

array.`join`(<delimiter>) - make string of array, default delimiter is a comma. Pass in string as argument.

array.`slice`(<start position>, <end position, exclusive>)
e.g. "hello".slice(3) will return a substring from char 3 to the end of the string => "lo".
e.g. "hello".slice(2,4) will return a substring from char 2 up to char 3 (stops at position 4) => "ll".

array.`splice`(<start>, <end, exclusive>, <replacement value1>, ...)
e.g.
let array = [1,2,3,4];
array.splice(1,2, "wassup") will return the element(s) spliced out and will add the new element(s) (if any) into the resulting gap. Number of removed and added elements doesn't need to match
=> returns [2] and array now equals [1,"wassup",3,4]

> splice affects the original array

array.reverse()
array.sort()

> these functions both affect the original array

array.shift() - removes
array.unshift(<value>) - adds

Both affect the original array, both return the value being added or removed from the **START** of the array

array.pop() - removes
array.push(<value>) - adds

Both affect the original array and return the value being added/removed from the **END** of the array.
