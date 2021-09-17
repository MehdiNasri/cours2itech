export class Personne {
    private _age : number;

    constructor(age) {
        this._age = age;
    }

    sayHello = () => {
        console.log("Hello !");
        
    }
    public get_age(): number {
        return this._age;
    }

    public set_age(_age: number): void {
        this._age = _age;
    }

   

}