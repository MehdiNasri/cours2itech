"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
var House = /** @class */ (function () {
    function House(surface, door) {
        var _this = this;
        this.display = function () {
            console.log("Je suis une maison ma surface est de " + _this._surface + "m2");
        };
        this._surface = surface;
        this.door = door;
    }
    House.prototype.getDoor = function () {
        console.log(this.door);
    };
    House.prototype.get_surface = function () {
        return this._surface;
    };
    House.prototype.set_surface = function (_surface) {
        this._surface = _surface;
    };
    return House;
}());
exports.House = House;
//# sourceMappingURL=house.js.map