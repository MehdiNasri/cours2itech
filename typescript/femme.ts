import { Humain } from "./humain";

export class Femme extends Humain {
    cheveux : number;

    constructor(nom : string , prenom : string, age :number, cheveux : number){
        super(nom , prenom , age)
        this.cheveux = cheveux;
    }
}