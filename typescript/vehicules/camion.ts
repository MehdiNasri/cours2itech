import { Moteur } from "../moteurs/moteur";
import { Vehicule } from "./vehicule";

export class Camion extends Vehicule {
   
    constructor(marque : string, couleur : string, prix : number, moteur : Moteur){
        super(marque,couleur,prix,moteur);
    }

    displayCamion = () => {
     console.log("Je suis un camion , ma marque est : " + this.get_marque() + " ma couleur est : " + this.get_couleur() + " je coute : " + this.get_prix() + "€ j'utilise un moteur : " + this.moteur.get_type());
     
    }
}