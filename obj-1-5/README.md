# Establishing object and variable scope

Variables are declared with var/let/const
Can be declared concurrently: `let x,y,z;`

Variables can be initialised when declared, e.g. `let x = 3;`

`let` and `const` have block scoping, `var` has function scoping:

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
