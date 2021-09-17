let read = require("readline-sync");
/**
 * 
 * @param {Number} num1 
 */
let fizzBuzz = (num1) => {
    let resultat;
    for(let index = 0; index <= num1 ; index++){
        if(index % 15 != 0){
            if(index % 3 === 0){
              resultat = "FIZZ";
            }
            else if (index % 5 === 0){
               resultat = "BUZZ";
            }
            else {
                resultat = index;
            } 
        }
        else{
            resultat = "FIZZBUZZ";
        }
        console.log(resultat);
    }
}

fizzBuzz(read.questionFloat("Entrez un nombre :"));


