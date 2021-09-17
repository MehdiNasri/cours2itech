export  class Humain {
    prenom : string;
    nom : string;
    age : number;

    constructor(prenom : string , nom : string, age : number) {
        console.log("Passage par le constructeur humain");        
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        
    }
    manger = () => {
        console.log("Je mange...");
        
    }
}

