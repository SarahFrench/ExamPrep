function Square(A, B, C, D){
    this.A = A;
    this.B = B;
    this.C = C;
    this.D = D;
}

var sq1 = new Square(5, 5, 5, 5);

console.log(sq1);
console.log(Object.getPrototypeOf(sq1));

Square.prototype.isSquare = function(){
    return this.A === this.B && this.B === this.C && this.C === this.D && this.D === this.A
}

console.log(sq1.isSquare());
console.log(Object.getPrototypeOf(sq1));

//if you create an object via the create method it's hard to set instance variables at point of creation
var sq2 = Object.create(Square.prototype, {
  area: {value: function(){
    if(this.isSquare()){
      return this.A * this.B;
    } else {
      return "Need more info to calculate area";
    }
  }}
});

sq2.A = 5;
sq2.B = 5;
sq2.C = 5;
sq2.D = 5;

console.log(sq2.area());
