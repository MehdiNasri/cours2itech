import { Moteur } from "../moteurs/moteur";

export class Vehicule {
    private _marque : string ;
    private _couleur : string;
    private _prix : number;
    moteur : Moteur;

    constructor(marque : string, couleur : string, prix : number, moteur : Moteur) {
        this._marque = marque;
        this._couleur = couleur;
        this._prix = prix;
        this.moteur = moteur;
    }

    
    public get_marque(): string {
        return this._marque;
    }

    public set_marque(_marque: string): void {
        this._marque = _marque;
    }

    public get_couleur(): string {
        return this._couleur;
    }

    public set_couleur(_couleur: string): void {
        this._couleur = _couleur;
    }

    public get_prix(): number {
        return this._prix;
    }

    public set_prix(_prix: number): void {
        this._prix = _prix;
    }

  

}