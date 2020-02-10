function Employee() {
  this.classFunction = function(){console.log("This function is set in the class itself")}
};
let employee1 = new Employee;
console.log(employee1);
employee1.classFunction();

Employee.prototype.anotherFunction = function(){
  console.log('"anotherFunction" : This is another function set on the Employee prototype!');
}

Employee.prototype.classFunction = function(){
  console.log('"classFunction" : overwritten!');
}

console.log(employee1);
employee1.classFunction();
employee1.anotherFunction();

let employee2 = new Employee;
console.log(employee2);
employee2.classFunction();
employee2.anotherFunction();



function Consultant(){
  Employee.call(this);
}

let consultant1 = new Consultant;
console.log(consultant1);
consultant1.classFunction();


Consultant.prototype.anotherFunction = function ( ){
  console.log("'anotherFunction' was overwritten for the Consultant class!");
}

let consultant2 = new Consultant;

console.log(consultant1);
consultant1.anotherFunction();
console.log(consultant2);
consultant2.anotherFunction();
console.log(employee1);
employee1.anotherFunction();
