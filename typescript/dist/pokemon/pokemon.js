"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(hp, atk, type) {
        var _this = this;
        this.isDead = function () {
            if (_this._hp <= 0) {
                return false;
            }
            else {
                return true;
            }
        };
        this.toString = function () {
            console.log("Les points de vies réstant du pokemon " + _this.get_type() + " sont : " + _this._hp);
        };
        this._hp = hp;
        this._atk = atk;
        this._type = type;
    }
    Pokemon.prototype.attaquer = function (pokemon) {
        pokemon.set_hp(pokemon.get_hp() - this._atk);
    };
    Pokemon.prototype.get_hp = function () {
        return this._hp;
    };
    Pokemon.prototype.set_hp = function (_hp) {
        this._hp = _hp;
    };
    Pokemon.prototype.get_atk = function () {
        return this._atk;
    };
    Pokemon.prototype.set_atk = function (_atk) {
        this._atk = _atk;
    };
    Pokemon.prototype.get_type = function () {
        return this._type;
    };
    Pokemon.prototype.set_type = function (_type) {
        this._type = _type;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map