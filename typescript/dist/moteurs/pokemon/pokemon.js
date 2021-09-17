"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(hp, atk) {
        var _this = this;
        this.isDead = function () {
            return false;
        };
        this.attaquer = function () {
            _this._hp -= _this._atk;
        };
        this.toString = function () {
            console.log("Les points de vies réstant du pokemon sont : " + _this._hp);
        };
        this._hp = hp;
        this._atk = atk;
    }
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
    return Pokemon;
}());
exports.Pokemon = Pokemon;
//# sourceMappingURL=pokemon.js.map