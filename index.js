// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides;
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce((total, side) => total + side, 0);
    }
}
class Triangle extends Polygon {
    constructor(sides){
        super(sides);
    }
    get isValid(){
        if (this.countSides !== 3) {
            return false;
          }
          const [a, b, c] = this.sides;
          return a + b > c && a + c > b && b + c > a;
    }
}
class Square extends Polygon{
    constructor(sides){
        super(sides);
    }
    get isValid(){
        if (this.countSides !== 4){
            return false;
        }
        const [a, b, c, d] = this.sides;
        return a === b && b === c && c === d;
    }
    get area(){
        if (!this.isValid){
            return null;
        }
        const sideLength = this.sides[0];
        return sideLength ** 2;
    }
}