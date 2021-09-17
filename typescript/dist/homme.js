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
exports.Homme = void 0;
var humain_1 = require("./humain");
var Homme = /** @class */ (function (_super) {
    __extends(Homme, _super);
    function Homme() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tondreLaPelouse = function () {
        };
        return _this;
    }
    return Homme;
}(humain_1.Humain));
exports.Homme = Homme;
//# sourceMappingURL=homme.js.map