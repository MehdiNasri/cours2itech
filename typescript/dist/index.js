"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemonFeu_1 = require("./pokemon/pokemonFeu");
var pokemonEau_1 = require("./pokemon/pokemonEau");
var read = require("readline-sync");
// let notes : number[] = [];
// let nom : string = read.question("Quel est le nom de l'étudiant :");
// let continu : boolean = true;
// while(continu){
//     notes.push(read.questionInt("entrez la note :"));
//     let wantToContinue =  read.question(" Voulez vous entrez un nouvelle note (o : oui , n : non):");
//     if(wantToContinue === "n"){
//         continu = false;
//     }
// }
// let etudiant1 : Etudiant = new Etudiant(nom,notes);
// let noteMoyenne : number = etudiant1.noteMoyenne();
// console.log("La note moyenne de " + nom +  " est " + noteMoyenne);
// POINT 2D 3D
// let point2D : Point2D = new Point2D(5,6);
// let point3D : Point3D = new Point3D(1,2,3);
// point2D.translater(1,2);
// point3D.translater(4,2,1);
// console.log(point2D);
// console.log(point3D);
//ETUDIANT 
// let personne : Personne = new Personne(10);
// let student : Student = new Student(15);
// let teacher : Teacher = new Teacher(40);
// personne.sayHello();
// student.goToClass();
// student.sayHello();
// student.displayAge();
// teacher.sayHello();
// teacher.explain();
//HOUSE EXERCICE :
// let door1 : Door = new Door("bleu");
// let door2 : Door = new Door("Vert"); 
// let house1 : House = new House(100,door1) 
// let personne1 : PersonneOfHouse = new PersonneOfHouse(house1,"Mirel");
// let appartement : Appartement = new Appartement(door2);
// house1.getDoor();
// house1.door.display();
// personne1.display();
// appartement.displayAppartement();
// appartement.door.display();
//VEHICULE EXO 
// let moteur : MoteurEssence = new MoteurEssence(150,69000); 
// let camion : Camion = new Camion("volvo","rouge",150000,moteur);
// camion.displayCamion();
// StationEssence.faireLePlein(camion);
//POKEMON EXO
var pokemonFeu = new pokemonFeu_1.PokemonFeu(100, 10);
var pokemonEau = new pokemonEau_1.PokemonEau(100, 10);
var tour = 1;
var tourPokemon = function (pokemon1, pokemon2) {
    if (tour % 2 !== 0) {
        pokemon1.attaquer(pokemon2);
        pokemon2.toString();
    }
    else {
        pokemon2.attaquer(pokemon1);
        pokemon1.toString();
    }
};
var combatPokemon = function (pokemon1, pokemon2) {
    while (pokemon1.isDead() && pokemon2.isDead()) {
        if (tour % 2 !== 0) {
            read.question("Le pokemon de type " + pokemon1.get_type() + " s apprete a attaquer le pokemon de type " + pokemon2.get_type() + " (appuyer sur entrer)");
        }
        else {
            read.question("Le pokemon de type " + pokemon2.get_type() + " s'apprete a attaquer le pokemon de type " + pokemon1.get_type() + " (appuyer sur entrer)");
        }
        tourPokemon(pokemon1, pokemon2);
        tour++;
    }
    if (pokemon1.isDead) {
        console.log("Le pokemon de type " + pokemon1.get_type() + " a gagner !");
    }
    else {
        console.log("Le pokemon de type " + pokemon2.get_type() + " a gagner !");
    }
};
combatPokemon(pokemonEau, pokemonFeu);
//# sourceMappingURL=index.js.map