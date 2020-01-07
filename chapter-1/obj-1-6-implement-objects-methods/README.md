### Exercise 1: Create objects using the Object function
The Object function provides a simple way to create a new instance of an object. After an object is created, it's just as easy to define new properties and methods. To do so, perform these tasks:

1. Create an object using the Object function.
2. Add a property to the new object.
3. Add a method to the new object.

```
let myObject = new Object();
myObject.property = "value";
myObject.method = function(){ //do stuff };

```

### Exercise 2: Create objects using literal notation
Literal notation, sometimes called associative arrays, provides a shorthand way to create objects using JavaScript. Perform these steps:

1. Create an object using literal notation.
2. Add a property to the new object.
3. Add a method to the new object.

```
let myObject = {
  creationMethod: "literal notation";
};

myObject.property = "value";
myObject.method = function(){ //do stuff };

```

### Exercise 3: Create objects using the object constructor and prototypes
The most reusable way to create objects in JavaScript is by using the object constructor paired with prototypes. This method of creating objects is completely flexible, allowing you to create unlimited instances of an object rather than only one. Perform these steps:

1. Create an object using the object constructor and prototypes.
2. Add a property to the new object.
3. Add a method to the new object.
4. Instantiate the object.


You can use Object.create():
```
  let animal = {
    eat: function (){ return "Yum!"},
    breathe: function(){ return "ooooh" }
  }

  let dog = Object.create(animal, { bark: {
    value: function(){ console.log("Woof");}
    }
  })

```

Here, dog extends the animal object and adds new properties.

You can make a class constructor as a function in ES5 like this:
```
  function Animal(name){
    this.name = name;
    this.eat = function (){ return "Yum!"};
    this.breathe = function(){ return "ooooh"};
  }

  function Dog(name){
    Animal.call(this, name);
    this.bark: function(){ return "Woof!"};
  }

  let fido = new Dog("Fido");
  fido.eat();
  fido.bark();

```
