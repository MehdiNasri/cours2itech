import { Pokemon } from "./pokemon";

export class PokemonPlante extends Pokemon {
    constructor(hp:number,atk:number){
        super(hp,atk,"Plante");
    }
    attaquer(pokemon : Pokemon){
        if(pokemon.get_type() === "Eau"){
            pokemon.set_hp(pokemon.get_hp() - this.get_atk() *2);
            console.log("L'attaque est super efficace !");
        }
        else if (pokemon.get_type() === "Feu"){
            pokemon.set_hp(pokemon.get_hp() - this.get_atk() / 2 );
            console.log("L'attaque n'est pas tres efficace !");
        }
    }
}