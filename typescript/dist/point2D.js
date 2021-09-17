"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2D = void 0;
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2D.prototype.translater = function (dX, dY) {
        this.x += dX;
        this.y += dY;
    };
    return Point2D;
}());
exports.Point2D = Point2D;
//# sourceMappingURL=point2D.js.map