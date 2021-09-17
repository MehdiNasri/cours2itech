"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Door = void 0;
var Door = /** @class */ (function () {
    function Door(color) {
        this._color = color;
    }
    Door.prototype.display = function () {
        console.log("Je suis une porte ma couleur est " + this._color);
    };
    Door.prototype.get_color = function () {
        return this._color;
    };
    Door.prototype.set_color = function (_color) {
        this._color = _color;
    };
    return Door;
}());
exports.Door = Door;
//# sourceMappingURL=door.js.map