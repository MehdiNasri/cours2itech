import { Moteur } from "./moteur";

export class MoteurDiesel extends Moteur {
  
    constructor(vitesse : number,kilometrage : number){
        super(vitesse,kilometrage);
        this.set_type("diesel");
    }
   

}