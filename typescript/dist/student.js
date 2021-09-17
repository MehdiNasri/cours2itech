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
exports.Student = void 0;
var personne_1 = require("./personne");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(age) {
        var _this = _super.call(this, age) || this;
        _this.goToClass = function () {
            console.log("i'm going to class");
        };
        _this.displayAge = function () {
            console.log("My age is " + _this.get_age());
        };
        return _this;
    }
    return Student;
}(personne_1.Personne));
exports.Student = Student;
//# sourceMappingURL=student.js.map