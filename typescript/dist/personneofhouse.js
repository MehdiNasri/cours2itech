"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonneOfHouse = void 0;
var PersonneOfHouse = /** @class */ (function () {
    function PersonneOfHouse(house, nom) {
        this.house = house;
        this.nom = nom;
    }
    PersonneOfHouse.prototype.display = function () {
        console.log("Je m'appelle  " + this.nom + "les informations de ma maison sont : " + this.house.get_surface() + "M2, la porte de cette maison est de couleur : " + this.house.door.get_color());
    };
    return PersonneOfHouse;
}());
exports.PersonneOfHouse = PersonneOfHouse;
//# sourceMappingURL=personneofhouse.js.map