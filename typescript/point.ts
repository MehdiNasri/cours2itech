export class Point {
    private _x : number;
    private _y : number;
 
    constructor(x :number , y :number,) {
        this._x = x;
        this._y = y;
    }
    public distance = (point : Point) : number =>{
        let distance : number = 0;
        distance = Math.sqrt(Math.pow((this._x - point.x),2) + Math.pow((this._y - point.y),2));
        return distance;
    }
    get x () : number {
        return this._x;
    }
    get y () : number {
        return this._y
    }
  
}