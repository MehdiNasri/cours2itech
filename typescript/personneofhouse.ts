import { House } from "./house";

export class PersonneOfHouse{
    nom : string;
    house : House;
    constructor(house : House, nom : string){
        this.house = house;
        this.nom = nom;
    }

    display(){
        console.log("Je m'appelle  "+ this.nom + "les informations de ma maison sont : " + this.house.get_surface() +"M2, la porte de cette maison est de couleur : " + this.house.door.get_color());
        
    }
}