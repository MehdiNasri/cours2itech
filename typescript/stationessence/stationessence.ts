import { Vehicule } from "../vehicules/vehicule";

export class StationEssence {

    private prixEssence : number;
    private prixDiesel : number;

    constructor(prixEssence: number, prixDiesel: number) {
        this.prixDiesel = prixDiesel;
        this.prixEssence = prixEssence;
    }

    getPrixEssence = () => {
        return this.prixEssence;
    }

    getPrixDiesel = () => {
        return this.prixDiesel;
    }

    static faireLePlein = (vehicule : Vehicule) => {
        console.log("Le vehicule : " + vehicule.get_marque() +" de couleur " + vehicule.get_couleur() + " a fait le plein de : " + vehicule.moteur.get_type());
        
    }
    
}