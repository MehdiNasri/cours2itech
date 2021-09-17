let read = require("readline-sync");
let joueur1 = true;
let joueur2 = false;
let tour = 0;
let victoire = true;

let morpionList = [
    ["_|", "_|","_|"],
    ["_|","_|","_|"],
    ["_|","_|","_|"]
]

morpionList.forEach(m => {
    console.log(m.join(""));
});

/**
 * remplissage du morpion par rapport au coordonées.
 * @param {number} coordoneeX 
 * @param {number} coordoneeY 
 */
let coordonee = (coordoneeX , coordoneeY) =>{
    if(coordoneeX == 0 || coordoneeX == 1 || coordoneeX == 2 || coordoneeY == 0 || coordoneeY == 1 || coordoneeY == 2){
        if(morpionList[coordoneeX][coordoneeY] != "x|" && morpionList[coordoneeX][coordoneeY] != "o|"){
            if(joueur1){
                morpionList[coordoneeX][coordoneeY] = "x|";
                joueur2 = true;
                joueur1 = false;
            }
            else{
                morpionList[coordoneeX][coordoneeY] = "o|";
                joueur2 = false;
                joueur1 = true;
            }
            morpionList.forEach(m => {
                console.log(m.join(""));
            });
        }
        else if(morpionList[coordoneeX][coordoneeY] == "x|" || morpionList[coordoneeX][coordoneeY] == "o|"){
            console.log("la case est deja prise , rejouez !");
            coordonee(read.questionFloat("choix coordonee X : "),read.questionFloat("choix coordonee Y : "));
        }
    }
    else{
  
        console.log("Les coordonnées ne peuvent pas etre assigné !");
        coordonee(read.questionFloat("choix coordonee X : "),read.questionFloat("choix coordonee Y : "));
    }
}
       
/**
 * Annonce quel joueur remporte la victoire
 */
let victoireJoueur = () => {
    if(!joueur1){
        console.log("Le joueur 1 à gagné !");
    }
    else {
        console.log("Le joueur 2 à gagné !");
    }
}

/**
 * savoir dans quel condition la victoire est donnée
 * @returns bool
 */
let conditionVictoire = () => {
    if(morpionList[0][0] === morpionList[0][1] && morpionList[0][0] === morpionList[0][2] && morpionList[0][0] !="_|"){
       victoireJoueur();
        return false;
    }
    else if(morpionList[1][0] === morpionList[1][1] && morpionList[1][0] === morpionList[1][2] && morpionList[1][0] !="_|"){
        victoireJoueur();
        return false;
    }
    else if(morpionList[2][0] === morpionList[2][1] && morpionList[2][0] === morpionList[2][2] && morpionList[2][0] !="_|"){
        victoireJoueur();
        return false;
    }
    else if(morpionList[0][0] === morpionList[1][0] && morpionList[0][0] === morpionList[2][0] && morpionList[0][0] !="_|"){
        victoireJoueur();
        return false;
    }
    else if(morpionList[0][1] === morpionList[1][1] && morpionList[0][1] === morpionList[2][1] && morpionList[0][1] !="_|"){
        victoireJoueur();
        return false;
    }
    else if(morpionList[0][2] === morpionList[1][2] && morpionList[0][2] === morpionList[2][2] && morpionList[0][2] !="_|"){
        victoireJoueur();
        return false;
    }
    else if(morpionList[0][2] === morpionList[1][1] && morpionList[0][2] === morpionList[2][0]  && morpionList[0][2] !="_|"){
        victoireJoueur();
        return false;
    }
    else if(morpionList[2][2] === morpionList[1][1] && morpionList[2][2] === morpionList[0][0] && morpionList[2][2] !="_|"){
        victoireJoueur();
        return false;
    }
    else{
        return true;
    }
}

/**
 * jeu du morpion
 */
let morpion = () =>{
    while(victoire){
        if(joueur1){
            console.log("Au tour du joueur 1");
        }
        else{
            console.log("Au tour du joueur 2");
        }
        coordonee(read.questionFloat("choix coordonee X : "),read.questionFloat("choix coordonee Y : "));
        tour++;
        if(tour === 9){
            console.log("egalité !");
            break;
        }
        else if(tour >= 5){
            victoire = conditionVictoire();
        }
    }
}

morpion();

