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
exports.Femme = void 0;
var humain_1 = require("./humain");
var Femme = /** @class */ (function (_super) {
    __extends(Femme, _super);
    function Femme(nom, prenom, age, cheveux) {
        var _this = _super.call(this, nom, prenom, age) || this;
        _this.cheveux = cheveux;
        return _this;
    }
    return Femme;
}(humain_1.Humain));
exports.Femme = Femme;
//# sourceMappingURL=femme.js.map