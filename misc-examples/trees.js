
/*
Playing with code from here

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor
*/

function Plant(name) {
  this.name = "Plant: " + name;
}
function Tree(name) {
  Plant.call(this, name);
  this.tree = true;
}

let theTree = new Tree('Redwood');
console.log(theTree.name);
console.log(theTree.tree);
console.log('theTree.constructor is ' + theTree.constructor)
