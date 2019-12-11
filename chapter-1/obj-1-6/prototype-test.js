function Square(A, B, C, D){
    this.A = A;
    this.B = B;
    this.C = C;
    this.D = D;
}

var sq1 = new Square(5, 5, 5, 5);

console.log(sq1);

Square.prototype.isSquare = function(){
    return this.A === this.B && this.B === this.C && this.C === this.D && this.D === this.A
}

console.log(sq1.isSquare());
