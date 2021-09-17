import { Point2D } from "./point2D";

export class Point3D extends Point2D{
    z : number
    constructor(x : number,y : number,z : number){
        super(x,y)
        this.z = z;
    }
    translater = (dX : number, dY : number , dZ ? :number) : void => {
        super.translater(dX,dY);
        this.z += dZ ? dZ : 0;
        
    }
}