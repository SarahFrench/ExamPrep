//Use the Object function (why would anyone do it this way??)
//This method uses prexisting objects as protypes for making new objects.
//You cannot access prototype properties on objects

//made using Object function
let person = new Object();
person.name = "Nobody"
person.age = 0
person.sayGreeting = function(){console.log("Hi, my name is " + this.name);}

//made using literal notation
let person2 = {
  name: "name2",
  age: 2,
  sayGreeting: function(){console.log("Hi, my name is " + this.name);}
}

let coolPerson = Object.create(person);

coolPerson.sayGreeting();

person.sayGreeting = function(){console.log("Wassssssuuuuuup, my name is " + this.name);}

coolPerson.sayGreeting();

person.sayGoodbye = function(){ console.log("See you later"); }
coolPerson.sayGoodbye = function(){ console.log("See youuuuuu"); }

//the you variable is made using coolPerson as a prototype, with an object containing new properties
let you = Object.create(coolPerson, {
  sayGoodbye: {value: function(){ console.log("Catch you later alligator")}}
})


person.sayGoodbye();
coolPerson.sayGoodbye();
you.sayGoodbye();

console.log('\n' + 'All the object have the same \'name\' value as the original person object that\'s later used as a prototype:');
console.log("person's name is " + person.name);
console.log("coolPerson's name is " + coolPerson.name);
console.log("you's name is " + you.name);

console.log("Prototype of person: ");
console.log(Object.getPrototypeOf(person));

console.log("Prototype of coolPerson: ");
console.log(Object.getPrototypeOf(coolPerson));

console.log("Prototype of you: ");
console.log(Object.getPrototypeOf(you));
