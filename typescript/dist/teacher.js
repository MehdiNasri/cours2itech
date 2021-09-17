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
exports.Teacher = void 0;
var personne_1 = require("./personne");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(age) {
        var _this = _super.call(this, age) || this;
        _this.explain = function () {
            console.log("Explanation begins");
        };
        return _this;
    }
    Teacher.prototype.get_subject = function () {
        return this._subject;
    };
    Teacher.prototype.set_subject = function (_subject) {
        this._subject = _subject;
    };
    return Teacher;
}(personne_1.Personne));
exports.Teacher = Teacher;
//# sourceMappingURL=teacher.js.map