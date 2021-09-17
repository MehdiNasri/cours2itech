let read = require("readline-sync");

let temperatureList = [12,25,5,7,6,-5,-7];
let temperaturePlusProcheDe0 = temperatureList[0];


temperatureList.forEach(temperature => {
    if(Math.abs(temperature) <= Math.abs(temperaturePlusProcheDe0)){
            if(temperature < 0){
                temperaturePlusProcheDe0 = temperature;
            }
            else{
                temperaturePlusProcheDe0 = temperature;
            }
            
        }
})

console.log(temperaturePlusProcheDe0);