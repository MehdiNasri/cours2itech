let read = require("readline-sync");
let num1 = read.questionFloat("entrez votre premier nombre :");
let num2 = read.questionFloat("entrez votre second nombre : ");
let num3 = read.questionFloat("entrez votre troisieme nombre :");

if(num1 > num2 && num1 > num3){
    console.log("Le plus grand nombre est : " + num1);
}
else if(num2 > num1 && num2 > num3){
    console.log("Le plus grand nombre est : " + num2);
}
else if(num3 > num1 && num3 > num2){
    console.log("Le plus grand nombre est : " + num3);
}