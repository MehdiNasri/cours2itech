export class Rectangle {
    a : number;
    b : number; 
    constructor(a : number, b :number ){
        this.a = a;
        this.b = b;
    }
     surface = () : number =>{
        return this.a * this.b ;
    }
}