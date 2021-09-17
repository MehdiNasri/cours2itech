let read = require("readline-sync");

let num1 = read.questionFloat("quel est le premier nombre ? ");
let operende = read.question("quel operende veut tu utliser ? ");
// verification de l'opérande.
while(operende !== "*" && operende !== "/" && operende !== "-" && operende !== "+"){
     operende = read.question("quel operende veut tu utliser ? ");
}

let num2 = read.questionFloat("quel est le deuxieme nombre ? ");

let result = 0;

if(operende === "*" || operende === "multiplication"){

    result = num1 * num2;
}
else if(operende === "/" || operende === "division"){

    result = num1 / num2;
}
else if(operende === "+" || operende === "addition"){

    result = num1 + num2;
}
else if(operende === "-" || operende === "soustraction"){

    result = num1 - num2;
}
else {
    console.log("Calcul impossible");
}

console.log("le resultat de l'opération est : " + result);