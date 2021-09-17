"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complex = void 0;
var Complex = /** @class */ (function () {
    function Complex(reel1, imaginaire1, reel2, imaginaire2) {
        var _this = this;
        this.somme = function () {
            console.log((_this.reel1 + _this.reel2) + " + " + (_this.imaginaire1 + _this.imaginaire2) + "i");
        };
        this.reel1 = reel1;
        this.imaginaire1 = imaginaire1;
        this.reel2 = reel2;
        this.imaginaire2 = imaginaire2;
    }
    return Complex;
}());
exports.Complex = Complex;
//# sourceMappingURL=complex.js.map