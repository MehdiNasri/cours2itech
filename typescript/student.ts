import { Personne } from "./personne";

export class Student extends Personne {
    constructor(age : number) {
        super(age)
    }
    goToClass = () => {
        console.log("i'm going to class");
        
    }
    displayAge = () => {
        console.log("My age is " + this.get_age());
    } 
}