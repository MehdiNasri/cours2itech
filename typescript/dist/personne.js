"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(age) {
        this.sayHello = function () {
            console.log("Hello !");
        };
        this._age = age;
    }
    Personne.prototype.get_age = function () {
        return this._age;
    };
    Personne.prototype.set_age = function (_age) {
        this._age = _age;
    };
    return Personne;
}());
exports.Personne = Personne;
//# sourceMappingURL=personne.js.map