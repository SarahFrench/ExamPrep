//object constructor and prototypes

//a class is implemented by making a function
function Book(title="", author="", ISBN="", shelfNumber=0){
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.shelfNumber = shelfNumber;
}

//you can modify single properties of the prototype
Book.prototype.helloWorld = function(){
  console.log("Hello World");
}
let myFirstBook = new Book("My Memoir", "Me")
myFirstBook.helloWorld();

/*
* You can change the entire prototype by setting it equal to an object
* but this overwrites any previous changes
*/
Book.prototype = {
  whereAmI: function(){
    console.log(`I'm on shelf ${this.shelfNumber}!`);
  },

}

let mySecondBook = new Book("My Second Memoir", "Me");

/*
* mySecondBook.helloWorld(); would not work as this instance was made with the new prototype that lacks that property.
* myFirstBook.whereAmI(); would also not work as that instance of Book was made with the original prototype and is unchanged.
*/

//See the differences in their prototypes:
console.log(Object.getPrototypeOf(myFirstBook));
console.log(Object.getPrototypeOf(mySecondBook));

//You can modify properties of instances in a similar way
mySecondBook.whereAmI();
mySecondBook.shelfNumber = 2;
mySecondBook.whereAmI();
//if you make a property of an instance have the same name as the prototype then it'll be invoked instead of the prototype's method
mySecondBook.whereAmI = function () {
  console.log("I don't know where I am");
}
mySecondBook.whereAmI();
