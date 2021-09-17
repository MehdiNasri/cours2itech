let read = require("readline-sync");

let montant = read.questionFloat("Quel est votre montant ? :");
let monnaieList = [500,200,100,50,20,10,5,2,1,0.5,0.02,0.01];
let coef = 0;

    monnaieList.forEach(monnaie => {
    coef = Math.floor(montant / monnaie);
    montant = montant - monnaie * coef; 
    console.log("Billet de " + monnaie + " = " + coef);
 });
