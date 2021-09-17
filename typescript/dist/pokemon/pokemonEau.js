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
exports.PokemonEau = void 0;
var pokemon_1 = require("./pokemon");
var PokemonEau = /** @class */ (function (_super) {
    __extends(PokemonEau, _super);
    function PokemonEau(hp, atk) {
        return _super.call(this, hp, atk, "Eau") || this;
    }
    PokemonEau.prototype.attaquer = function (pokemon) {
        if (pokemon.get_type() === "Feu") {
            pokemon.set_hp(pokemon.get_hp() - this.get_atk() * 2);
            console.log("L'attaque est super efficace !");
        }
        else if (pokemon.get_type() === "Plante") {
            pokemon.set_hp(pokemon.get_hp() - this.get_atk() / 2);
            console.log("L'attaque n'est pas tres efficace !");
        }
    };
    return PokemonEau;
}(pokemon_1.Pokemon));
exports.PokemonEau = PokemonEau;
//# sourceMappingURL=pokemonEau.js.map