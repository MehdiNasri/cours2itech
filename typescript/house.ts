import { Door } from "./door";

export class House {
    private _surface : number;
    door : Door;

    constructor(surface : number,door : Door){
        this._surface = surface;
        this.door = door;
    }

    display = () => {
        console.log("Je suis une maison ma surface est de " + this._surface + "m2");
        
    }

    getDoor(){
        console.log(this.door);
  
    }

    public get_surface(): number {
        return this._surface;
    }

    public set_surface(_surface: number): void {
        this._surface = _surface;
    }


}