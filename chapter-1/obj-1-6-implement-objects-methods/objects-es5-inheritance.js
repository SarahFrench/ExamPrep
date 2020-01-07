function Book(title="", author="", ISBN="", shelfNumber=0){
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.shelfNumber = shelfNumber;
  this.helloWorld = function(){ console.log("Hello World!") };
}

function PopUpBook(title="", author="", ISBN="", shelfNumber=0){
  Book.call(this, title, author, ISBN, shelfNumber);
  this.popUp = function(){console.log("The book popped up!")};
}

/*
* "With call(), an object can use a method belonging to another object." - https://www.w3schools.com/js/js_function_call.asp
* The Book class is a function object, and we use .call on it to allow the child class to use it
*/

let myPopup = new PopUpBook("Title", "Author", "ISBN", 1);

/*
 * Instances of the PopUpBook class have the new function exclusive to that class,
 * but also have all the properties inherited by the Book class
 */

console.log(myPopup.popUp());
console.log(myPopup.title);
console.log(myPopup);
