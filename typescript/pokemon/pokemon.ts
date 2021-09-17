export  class Pokemon {
    private _hp : number;
    private _atk : number;
    private _type : string;

    constructor(hp : number,atk : number,type : string) {
       this._hp = hp;
       this._atk = atk; 
       this._type = type;
    }
    isDead = () : boolean => {
        if(this._hp <= 0 ){
            return false;
        }
        else{
            return true;
        }
     
    }

    attaquer (pokemon : Pokemon) : void {
        pokemon.set_hp(pokemon.get_hp() - this._atk);
    }

    public get_hp(): number {
        return this._hp;
    }
    toString = () => {  
        console.log("Les points de vies réstant du pokemon "+ this.get_type() +" sont : " + this._hp );
    }
    public set_hp(_hp: number): void {
        this._hp = _hp;
    }

    public get_atk(): number {
        return this._atk;
    }

    public set_atk(_atk: number): void {
        this._atk = _atk;
    }
    public get_type(): string {
        return this._type;
    }

    public set_type(_type: string): void {
        this._type = _type;
    }

}