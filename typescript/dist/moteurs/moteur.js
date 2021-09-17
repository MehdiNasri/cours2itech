"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moteur = void 0;
var Moteur = /** @class */ (function () {
    function Moteur(vitesse, kilometrage) {
        this._vitesse = vitesse;
        this._kilometrage = kilometrage;
    }
    Moteur.prototype.get_vitesse = function () {
        return this._vitesse;
    };
    Moteur.prototype.set_vitesse = function (_vitesse) {
        this._vitesse = _vitesse;
    };
    Moteur.prototype.get_kilometrage = function () {
        return this._kilometrage;
    };
    Moteur.prototype.set_kilometrage = function (_kilometrage) {
        this._kilometrage = _kilometrage;
    };
    Moteur.prototype.get_type = function () {
        return this._type;
    };
    Moteur.prototype.set_type = function (_type) {
        this._type = _type;
    };
    return Moteur;
}());
exports.Moteur = Moteur;
//# sourceMappingURL=moteur.js.map