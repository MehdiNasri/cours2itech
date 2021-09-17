"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonFeu = void 0;
var pokemon_1 = require("./pokemon");
var PokemonFeu = /** @class */ (function (_super) {
    __extends(PokemonFeu, _super);
    function PokemonFeu(hp, atk) {
        return _super.call(this, hp, atk, "Feu") || this;
    }
    PokemonFeu.prototype.attaquer = function (pokemon) {
        if (pokemon.get_type() === "Plante") {
            pokemon.set_hp(pokemon.get_hp() - this.get_atk() * 2);
            console.log("L'attaque est super efficace !");
        }
        else if (pokemon.get_type() === "Eau") {
            pokemon.set_hp(pokemon.get_hp() - this.get_atk() / 2);
            console.log("L'attaque n'est pas tres efficace !");
        }
    };
    return PokemonFeu;
}(pokemon_1.Pokemon));
exports.PokemonFeu = PokemonFeu;
//# sourceMappingURL=pokemonFeu.js.map