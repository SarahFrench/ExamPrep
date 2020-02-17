# Lexical scoping

If a variable is referenced in a nested scope but it's not declared in that scope, the program will look up through the 'parent' scopes up to the global scope. If that variable isn't found in the global scope, then an exception will be thrown.

```
program A;
var I:integer;
    K:char;

    procedure B;
    var K:real;
        L:integer;

        procedure C;
        var M:real;
        begin
         (*scope A+B+C*)
        end;

     (*scope A+B*)
    end;

 (*scope A*)
end.
```
From: https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scoping

# Hoisting

In JS all declarations of variables are hoisted to the top of the local scope. The initialisation is not, though. Initialisation only occurs at the 'place' in the code where it's written, but variables are all declared at the start.

`let`/`const` are hoisted differently to `var`; Variables declared with `var` are automatically initialised as equal to `undefined`, so if you try to access the value of a hoisted variable before it's explicitly assigned a variable there will not be an exception thrown. On the other hand, `let` and `const` declare variables but do not initialise them, so if you try to evaluate the values of those variables an exception WILL be thrown.

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
