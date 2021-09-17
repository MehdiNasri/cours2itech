let read = require("readline-sync");

let note = read.questionFloat("Quel est la note ?");

if(note <= 4 && note >= 0){
    console.log("Catastrophique, il faut tout revoir");
}
else if (note >= 5 && note <= 10 ){
    console.log("Insuffisant");
}
else if (note >= 11 && note <= 14 ){
    console.log("Peut mieux faire");
}
else if (note >= 15 && note <= 17 ){
    console.log("Bien");
}
else if (note >= 8 && note <= 20 ){
    console.log("Excellent, bon travail");
}
