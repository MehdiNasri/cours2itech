export class Door {
    private _color : string;
    constructor(color){
        this._color = color
    }
    display(){
        console.log("Je suis une porte ma couleur est " + this._color);
        
    }
    public get_color(): string {
        return this._color;
    }

    public set_color(_color: string): void {
        this._color = _color;
    }

    
}