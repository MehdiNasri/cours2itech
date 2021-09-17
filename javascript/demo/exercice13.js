let read = require("readline-sync");

let list = [12,25,7,6,-5,5];

for(let index = 0; index < list.length; index++){
    for(let j = index ; j < list.length; j++ ){
        if(list[index] > list[j]){
            let temp = list[index];
            list[index] = list[j];
            list[j] = temp;
        }
    }
}

console.log(list);