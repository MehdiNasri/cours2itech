let read = require("readline-sync");


let prixRandoms = (nb) => {
    return Math.floor(Math.random() * nb)
};

let justePrix = (tentative , nombre) => {
    let prixRandom = prixRandoms(nombre);
    let choixPrix = read.questionFloat("Devinez le prix :");
    tentative--;
    while(tentative > 0){
        if(choixPrix != prixRandom){
            if(choixPrix < prixRandom){
                console.log("C'est plus !");
            }
            else {
                console.log("C'est moins !");
            }
            choixPrix = read.questionFloat("Mauvais prix ! , devinez le prix :");
            tentative--;
        }
        else{
            console.log("Vous avez trouvé le bon prix bravo !");
            break;
        }
     }
}

justePrix(read.questionFloat("Saisir un nombre de tentatives :"),read.questionFloat("Saisir un nombre :"));
