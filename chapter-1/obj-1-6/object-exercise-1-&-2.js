//Use the Object function (why would anyone do it this way??)
//This method uses prexisting objects as protypes for making new objects.
//You cannot access prototype properties on objects

//made using Object function
let person = new Object();
person.name ="name"
person.age = 0
person.sayGreeting = function(){console.log("Hi");}

//made using literal notation
let person2 = {
  name: "name2",
  age: 2,
  sayGreeting: function(){console.log("Hi");}
}

let coolPerson = Object.create(person);

coolPerson.sayGreeting();

person.sayGreeting = function(){console.log("Wassssssuuuuuup");}

coolPerson.sayGreeting();

person.sayGoodbye = function(){ console.log("See you later"); }

let you = Object.create(coolPerson)

coolPerson.sayGoodbye = function(){ console.log("Catch you later alligator")}

person.sayGoodbye();
you.sayGoodbye();
