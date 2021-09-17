export class Point2D {
    x : number;
    y : number;
    constructor(x : number , y : number){
        this.x = x;
        this.y = y;
    }
    translater(dX : number ,dY : number) : void {
        this.x += dX;
        this.y += dY;
    }
}