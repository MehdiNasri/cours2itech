import { Door } from "./door";
import { House } from "./house";

export class Appartement extends House{

    constructor(door : Door) {
        super(50, door)
    }

    displayAppartement(){
        console.log("je suis une appartement ma surface est "+ this.get_surface() +"M2");
        
    }
}