# Validate user input by using JavaScript

## Objectives:

- evaluate regular expressions
- validate data with built-in functions
- prevent code injection

## My notes

You can use JS to get info from input fields. E.g. the value property is used to access the value enters into a field:

```js
document.getElementById('my-color-picker').value
//returns => "#000000"
```

You can see if a checkbox or radio button is checked using the checked property:

```js
document.getElementById('checkedCheckbox').checked; //true
document.getElementById('uncheckedCheckbox').checked; //false
```

NOTE: This property is present on all input fields (where it returns false when the input isn't check-able).

On fields with validations (e.g. pattern/min/max/step attributes, tel/url types etc) you can use the `checkValidity()` function on that element to get a boolean.


## Evaluating regular expressions

- `^` start of string
- `$` end of string
- `.` any char
- `[A-Z]` any alphabetic character, upper case. Vs `[a-z]`
- `\d` numeric chars
- `+` *one or more*
- `*` *zero or more*
- `[^]` negated set, e.g `[^a]` means any char except `a`
-  `?` makes preceding token/char is optional
- `\w` any alphanumeric word char, including underscores
- '\\' escape character, e.g. if you had a regex looking for a dollar sign you'd need to escape it.
- `\s` space character

### Flags

/regexp/<flag(s) here>

- `g` - global
- `i` - case insensitive

## Regex in JavaScript

"I'm a string" = String primitive type
/\b\w{2,3}\b/ = regular expression Object, flanked with `/`.

Strings have methods `match` and `search`, which take in regex objects as an argument. match returns an Object with information about the first string matching the regex, the index where it starting in the input string, and the input string. Search returns only the index of the first match of the regex. If there's no match then it returns `-1`. If it's passed a string as an argument then that's converted into a RexExp object and used.

```js
"Hello world".match(/w/); // => [ 'w', index: 6, input: 'Hello world', groups: undefined ]
"Hello world".search(/w/); // => 6 ; found starting at position 6
"Hello world".search(/z/); // => -1 ; not found
```

RexExp object have methods `match` and `test`

```js
/h/.test("hello"); // => true
/h/.exec("hello"); // => [ 'h', index: 0, input: 'hello', groups: undefined ]
```

RegExp.exec and String.match basically do the same thing.


## Validating data with built-in functions

- `isNan()` => true if passed non-number, e.g. undefined, a string, object, etc.
- `isFinite()` => false if passed +/- `Infinity`, `undefined`, `NaN`, true if passed numbers or strings coercible to strings that an

These functions take in an argument, coerce it into a Number and then asks if that number is 'not equal value or not equal type' to that number, and returns the resulting boolean. This takes advantage of the fact that NaN !== NaN, so if the argument evaluates as NaN isNaN will return `true`.

### Preventing code injection

People can inject JavaScript code into a page, either attempting to take users' information or 'take over' the site.

You want to sanitise inputs, e.g. removing `<` and `>` chars to make text HTML safe

https://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
Example function you can use to sanitise some inputs:
```js
function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
 ```

There are tons of ways for cross site scripting to occur, often exploiting HTML5 features: http://html5sec.org/, e.g. having some JS run on an onfocus event listener (inline atrr) and adding an autofocus attr to the same tag.

There's a function `eval` which takes in a string and evaluates it as javascript. e.g.
```js
eval("let myFunction = function (a){ return a*2}; myFunction(100);");
// => returns 200;
```

In the above example myFunction is undefined in the global scope after running `eval`.
If you declared myFunction before running the `eval` statement then it'll be assigned the function in the string.

How about just don't use `eval` and if you have to DON'T RUN IT ON USER INPUT YOU DUMMY

## iFrames

iFrames = running another document within yours.

```html
<iframe
  title="titles are good for accessibility"
  width="300"
  height="300"
  src="https://www.asite.com/document"
  sandbox=""
  referrerpolicy="<choice>"
/>
```

The `sandbox` attribute controls permissions for what the contained iframe can do:
- `""` : applies all restrictions; most secure
- `allow-same-origin` : content of iframe treated as if it comes from the containing HTML doc
- `allow-top-navigation` : iframe can load content from the containing HTML doc
- `allow-forms` : iframe can submit forms
- `allow-scripts` : iframe can run scripts
