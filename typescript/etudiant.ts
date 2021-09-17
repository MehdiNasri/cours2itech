export class Etudiant {
    nom : string;
    notes : number[]
    constructor(nom:string ,notes :number[] ){
        this.nom = nom;
        this.notes = notes;

    }
     noteMoyenne = () : number =>{
         let noteFinal : number = 0;
         for(let index : number = 0 ; index < this.notes.length; index++ ){
             noteFinal += this.notes[index];
         }
        return noteFinal / this.notes.length ;
    }
}