import { Personne } from "./personne";

export class Teacher extends Personne {
    private _subject : string;


    constructor(age) {
        super(age)
    }
    explain = () =>{
        console.log("Explanation begins");
        
    }

    public get_subject(): string {
        return this._subject;
    }

    public set_subject(_subject: string): void {
        this._subject = _subject;
    }

}