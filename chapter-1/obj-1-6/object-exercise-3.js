//object constructor and prototypes

function Book(title="", author="", ISBN="", shelfNumber=0){
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.shelfNumber = shelfNumber;
  this.whereAmI = function(){
    console.log(`I'm on shelf ${this.shelfNumber}!`);
  }
}

let myBook = new Book("", "Me")
myBook.whereAmI();


Book.prototype.helloWorld = function(){
  console.log("Hello World");
}

myBook.helloWorld();
myBook.title= "My Memoir";

console.log(myBook);
console.log(Object.getPrototypeOf(myBook));
console.log(new Book());
