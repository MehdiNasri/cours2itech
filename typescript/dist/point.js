"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.distance = function (point) {
            var distance = 0;
            distance = Math.sqrt(Math.pow((_this._x - point.x), 2) + Math.pow((_this._y - point.y), 2));
            return distance;
        };
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
//# sourceMappingURL=point.js.map