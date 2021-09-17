"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Humain = void 0;
var Humain = /** @class */ (function () {
    function Humain(prenom, nom, age) {
        this.manger = function () {
            console.log("Je mange...");
        };
        console.log("Passage par le constructeur humain");
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
    }
    return Humain;
}());
exports.Humain = Humain;
//# sourceMappingURL=humain.js.map