import { Moteur } from "./moteur";

export class MoteurEssence extends Moteur {

    constructor(vitesse : number,kilometrage : number){
        super(vitesse,kilometrage);
        this.set_type("essence");
    }

}