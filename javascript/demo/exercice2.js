let read = require("readline-sync");
let num1 = read.questionFloat("entrez votre premier nombre :");
let num2 = read.questionFloat("entrez votre second nombre : ");

let result = num1 + num2;

console.log("La somme des deux valeurs = " + result);
