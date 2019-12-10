# Establishing object and variable scope

Variables are declared with var/let/const
Can be declared concurrently: `let x,y,z;`

Variables can be initialised when declared, e.g. `let x = 3;`. Until then, declared variables are undefined.

Scoping is defined by where a variable is declared, and using what keyword; `let` and `const` have block scoping, `var` has function scoping:

```
function myFunction(){
  let x = 3;
  if(x > 2){
    var y = 5;
    let z = 0;
  }
  alert(x); //alert says 3; x is accessible as in the same (block) scope
  alert(y); //alert says 5; declaration using var is scoped to the whole function
  alert(z); //alert causes an error; z is scoped to the if statement only.
}
```

## Avoid using the global namespace

`window` = the global namespace in the browser.

Stuff in the global namespace is **exempt from garbage collection**, so you'll need more memory and system resources (battery usage?) to run your application.

Also, there's the change of clashing **variable names**.

## Using `this`

Refers to the containing object;

```
  window.onload = function() {
    //Here this refers to the global namespace
    document.getElementById('my-element').onclick = function(){
      //here this refers to the selected element
    }
  }
```

## Custom name spaces for libraries

You can create a namespace like this:

```
var yourNamespace = {

    foo: function() {
    },

    bar: function() {
    }
};

...

yourNamespace.foo();
```

This means that you can use function names freely without worrying about other libraries you're using. e.g. using `location` as a variable name in the global namespace causes an issue because window.location is a Location Object that includes info about the href, protocol used, etc.
