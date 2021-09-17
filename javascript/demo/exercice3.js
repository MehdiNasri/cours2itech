let read = require("readline-sync");
let prixFabrication = read.questionFloat("Quel est le prix de fabrication? :");
let prixVente = read.questionFloat("Quel est le prix de vente ? :");

if(prixFabrication > prixVente){
    console.log("Vous etes a perte");
}
else{
    console.log("Vous etes a profit");
}