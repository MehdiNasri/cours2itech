let read = require("readline-sync");    

let num1 = read.questionFloat("entrez un nombre :");

let affichage = "";
let num2 = num1 * 2;
for(let index = 0; index < num2 ; index++){

    if(index >= num1){
        affichage = affichage.slice(0,affichage.length - 1); 
        console.log(affichage);
    }
    else{
        affichage +="*";
        console.log(affichage);
       
    }
    
}